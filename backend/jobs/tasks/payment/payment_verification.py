from celery import shared_task
from celery.exceptions import MaxRetriesExceededError
from payment.models import Transaction
import mercadopago  
from decouple import config
import datetime
from plans.models import Plans, UserPlan
@shared_task(
    bind=True, max_retries=24, default_retry_delay=300, name="check_payment_status_task"
) # default retry delay is 5 minutes
def check_payment_status_task(self, hash_id):

    transaction = Transaction.objects.get(hash_id=hash_id)
    
    payment_successful = False

    if transaction.status == "approved":
        payment_successful = True

    try:
        user = transaction.user_set.first()

        if config("DEBUG", default=False, cast=bool):
            sdk = mercadopago.SDK(config("MERCADO_PAGO_ACCESS_TOKEN_TEST"))
        else:
            sdk = mercadopago.SDK(config("MERCADO_PAGO_ACCESS_TOKEN_PRD"))

        payment = sdk.payment().search({"external_reference": hash_id})

        print("User: ", user)
        print("Is superuser: ", user.is_superuser)
        print("Is admin: ", user.is_staff)

        if user.is_superuser:
            transaction.status = "approved"
            transaction.updated_at = datetime.datetime.now()
            transaction.save()

            payment_successful = True

            user_plan = UserPlan.objects.filter(user=user)

            if not user_plan.exists():
                UserPlan.objects.create(user=user, plan=Plans.objects.get(title="Junior"))

                user_plan = UserPlan.objects.get(user=user)

            else:
                user_plan = user_plan.first()

            user_plan.plan = transaction.plan_acquired
            user_plan.active = True
            user_plan.changed_at = datetime.datetime.now()  
            user_plan.end_date = datetime.datetime.now() + datetime.timedelta(days=30)
            user_plan.save()

        else:

            if payment["response"]["results"][0]["status"] == "approved":
                transaction.status = "approved"

                payment_method = payment["response"]["results"][0]["payment_method_id"]

                if payment_method == "credit_card":
                    transaction.payment_method = "credit_card"
                else:
                    transaction.payment_method = "pix"

                transaction.updated_at = datetime.datetime.now()
                transaction.save()

                user_plan = UserPlan.objects.filter(user=user)

                if not user_plan.exists():
                    UserPlan.objects.create(user=user, plan=Plans.objects.get(title="Junior"))

                    user_plan = UserPlan.objects.get(user=user)

                else:
                    user_plan = user_plan.first()

                user_plan.plan = transaction.plan_acquired
                user_plan.active = True
                user_plan.changed_at = datetime.datetime.now()
                user_plan.end_date = datetime.datetime.now() + datetime.timedelta(days=30)
                user_plan.save()

                payment_successful = True
            else:
                payment_successful = False

        if payment_successful:
            print(f"Payment {hash_id} has been successful!")
            return "Payment successful" 

        else:
            print(f"Payment {hash_id} not successful. Retrying...")
            raise self.retry() 

    except MaxRetriesExceededError:
        print(f"Maximum retry attempts reached for payment {hash_id}.")
        return "Payment verification failed after maximum retries"
