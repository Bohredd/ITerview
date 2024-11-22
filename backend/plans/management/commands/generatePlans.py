from plans.models import Plans
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    def handle(self, *args, **options):
        Plans.objects.create(title="Junior", price=0, max_daily_participations=1, max_interview_participations=1, 
                             max_common_sentences=5, description="You already have this plan!", card_text_color="danger")
        Plans.objects.create(title="Mid-Level", price=7, max_daily_participations=3,
                              max_interview_participations=5, description="I want to be a mid-level!", card_text_color="warning") # infinite max common sentences
        Plans.objects.create(title="Senior", price=20, max_daily_participations=10,
                             description="I want to be a senior!", card_text_color="success") # infinite max common sentences and infinite max interview participations