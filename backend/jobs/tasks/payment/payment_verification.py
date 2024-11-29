from celery import shared_task
from celery.exceptions import MaxRetriesExceededError


@shared_task(
    bind=True, max_retries=24, default_retry_delay=300, name="check_payment_status_task"
) # default retry delay is 5 minutes
def check_payment_status_task(self, payment_id):
    try:
        payment_successful = False

        print("Pagamento com sucesso? ", payment_successful)

        if payment_successful:
            print(f"Payment {payment_id} has been successful!")
            return "Payment successful" 

        else:
            print(f"Payment {payment_id} not successful. Retrying...")
            raise self.retry() 

    except MaxRetriesExceededError:
        print(f"Maximum retry attempts reached for payment {payment_id}.")
        return "Payment verification failed after maximum retries"
