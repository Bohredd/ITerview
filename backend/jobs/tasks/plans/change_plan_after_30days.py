from celery import shared_task
from celery.exceptions import MaxRetriesExceededError


@shared_task(name="change_plan_after_30days_task")
def change_plan_after_30days_task(user_id):
    try:
        print(f"Changing plan for user {user_id} after 30 days!")
        return "Plan changed after 30 days"

    except MaxRetriesExceededError:
        print(f"Maximum retry attempts reached for changing plan for user {user_id}.")
        return "Plan change failed after maximum retries"
