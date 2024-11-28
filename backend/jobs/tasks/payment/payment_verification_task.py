from celery import shared_task
from celery.exceptions import MaxRetriesExceededError
from time import sleep

@shared_task(bind=True, max_retries=24, default_retry_delay=300) 
def check_payment(self, payment_id):
    try:
        payment_successful = True

        if payment_successful:
            print(f"Payment {payment_id} has been successful!")
            return "Payment successful" 

        else:
            print(f"Payment {payment_id} not successful. Retrying...")
            raise self.retry() 

    except MaxRetriesExceededError:
        print(f"Maximum retry attempts reached for payment {payment_id}.")
        return "Payment verification failed after maximum retries"
