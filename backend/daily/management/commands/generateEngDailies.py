from django.core.management.base import BaseCommand
from daily.models import Person, PersonRole, Voices, Speech, Daily, ProbablyAnswer, Information

class Command(BaseCommand):
    help = 'Populate initial data for the project with a long conversation'

    def handle(self, *args, **kwargs):
        # Create people with different roles
        tech_lead = Person.objects.create(name="Alice", role=PersonRole.TECH_LEAD,  voice=Voices.michelle, image="url_to_image")
        developer = Person.objects.create(name="Bob", role=PersonRole.DEVELOPER, is_you=True)
        qa = Person.objects.create(name="Charlie", role=PersonRole.QUALITY_ASSURANCE, voice=Voices.ava, image="url_to_image")
        pm = Person.objects.create(name="Diana", role=PersonRole.PROJECT_MANAGER, voice=Voices.roger, image="url_to_image")
        product_owner = Person.objects.create(name="Eve", role=PersonRole.PRODUCT_OWNER, voice=Voices.guy, image="url_to_image")
        scrum_master = Person.objects.create(name="Frank", role=PersonRole.SCRUM_MASTER, voice=Voices.steffen, image="url_to_image")
        designer = Person.objects.create(name="Grace", role=PersonRole.DESIGNER, voice=Voices.alonso, image="url_to_image")

        # Scrum Master starts the conversation
        speech1 = Speech.objects.create(order=1, speaker=scrum_master, content="Good morning, team! Let's begin the daily standup.", is_question=False)
        
        # Scrum Master asks questions about yesterday's work
        speech2 = Speech.objects.create(order=2, speaker=scrum_master, content="Alice, what did you do yesterday?", is_question=True)
        speech3 = Speech.objects.create(order=3, speaker=tech_lead, content="Yesterday, I reviewed the code and discussed priorities with Bob.", is_question=False)

        # Scrum Master asked you about your work yesterday
        speech4 = Speech.objects.create(order=4, speaker=scrum_master, content="Bob, what did you do yesterday?", is_question=True, is_to_you=True)
        probably_answer1 = ProbablyAnswer.objects.create(answer="I fixed the bugs from yesterday.", is_correct=True)
        probably_answer2 = ProbablyAnswer.objects.create(answer="I added a new feature instead.", is_correct=False, penality="Focus on existing tasks before adding new ones.", who_says_penality=scrum_master)

        speech4.probably_answers.add(probably_answer1, probably_answer2)
        
        speech5 = Speech.objects.create(order=5, speaker=scrum_master, content="Ok.", is_question=False)

        speech6 = Speech.objects.create(order=6, speaker=scrum_master, content="Charlie, what did you do yesterday?", is_question=True)
        speech7 = Speech.objects.create(order=7, speaker=qa, content="I tested the new feature and reported some bugs.", is_question=False)

        speech8 = Speech.objects.create(order=8, speaker=scrum_master, content="Diana, what did you do yesterday?", is_question=True)
        speech9 = Speech.objects.create(order=9, speaker=pm, content="I managed the team's progress and prepared some reports.", is_question=False)

        speech10 = Speech.objects.create(order=10, speaker=scrum_master, content="Eve, what did you do yesterday?", is_question=True)
        speech11 = Speech.objects.create(order=11, speaker=product_owner, content="I met with the client to finalize the feature requests.", is_question=False)

        speech12 = Speech.objects.create(order=12, speaker=scrum_master, content="Grace, what did you do yesterday?", is_question=True)
        speech13 = Speech.objects.create(order=13, speaker=designer, content="I worked on the UI for the new feature and reviewed design drafts.", is_question=False)

        # Scrum Master asks questions about today's work
        information = Information.objects.create(title="Task for today", content="Implement the new feature and fix any bugs that ive been noticed yesterday.")

        speech14 = Speech.objects.create(order=14, speaker=scrum_master, content="Bob, what will you do today?", is_question=True, is_to_you=True, information=information)

        probably_answer1 = ProbablyAnswer.objects.create(answer="I’ll implement the new feature and fix any bugs.", is_correct=True)
        probably_answer2 = ProbablyAnswer.objects.create(answer="I’ll work on a different task instead.", is_correct=False, penality="Focus on the assigned tasks for today.", who_says_penality=scrum_master)

        speech14.probably_answers.add(probably_answer1, probably_answer2)
        
        speech15 = Speech.objects.create(order=15, speaker=scrum_master, content="Ok. Great!", is_question=False)

        speech16 = Speech.objects.create(order=16, speaker=scrum_master, content="Alice, what will you do today?", is_question=True)
        speech17 = Speech.objects.create(order=17, speaker=tech_lead, content="I’ll prepare the project report and assist the dev team.", is_question=False)

        speech18 = Speech.objects.create(order=18, speaker=scrum_master, content="Charlie, what will you do today?", is_question=True)
        speech19 = Speech.objects.create(order=19, speaker=qa, content="I’ll test the new features and report any issues.", is_question=False)

        speech20 = Speech.objects.create(order=20, speaker=scrum_master, content="Diana, what will you do today?", is_question=True)
        speech21 = Speech.objects.create(order=21, speaker=pm, content="I’ll finalize the project timeline and communicate with the client.", is_question=False)

        speech22 = Speech.objects.create(order=22, speaker=scrum_master, content="Eve, what will you do today?", is_question=True)
        speech23 = Speech.objects.create(order=23, speaker=product_owner, content="I’ll work on the product backlog and discuss priorities.", is_question=False)

        speech24 = Speech.objects.create(order=24, speaker=scrum_master, content="Grace, what will you do today?", is_question=True)
        speech25 = Speech.objects.create(order=25, speaker=designer, content="I’ll finish the UI design and provide feedback on implementation.", is_question=False)

        # Scrum Master asks if there are any blocks

        information = Information.objects.create(title="Blocks", content="If you have any blocks, please share them with the team. Remeber, you did all your work from yesterday and you will start a new feature and fix bugs. How you have blocks if you did all your work?")

        speech26 = Speech.objects.create(order=26, speaker=scrum_master, content="Bob, do you have any blocks?", is_question=True, is_to_you=True, information=information)

        # Create probable answers for a specific question about blocks
        probably_answer1 = ProbablyAnswer.objects.create(answer="No blocks for today, everything is on track.", is_correct=True)
        probably_answer2 = ProbablyAnswer.objects.create(answer="I have some blocks that need to be addressed", is_correct=False, penality="You need to work on the assigned tasks for today.", who_says_penality=scrum_master)

        speech26.probably_answers.add(probably_answer1, probably_answer2)
    
        speech27 = Speech.objects.create(order=27, speaker=scrum_master, content="Alice, do you have any blocks?", is_question=True)
        speech28 = Speech.objects.create(order=28, speaker=tech_lead, content="No blocks for today.", is_question=False)

        speech29 = Speech.objects.create(order=29, speaker=scrum_master, content="Charlie, do you have any blocks?", is_question=True)
        speech30 = Speech.objects.create(order=30, speaker=qa, content="No blocks for today.", is_question=False)

        speech31 = Speech.objects.create(order=31, speaker=scrum_master, content="Diana, do you have any blocks?", is_question=True)
        speech32 = Speech.objects.create(order=32, speaker=pm, content="No blocks, all is good.", is_question=False)

        speech33 = Speech.objects.create(order=33, speaker=scrum_master, content="Eve, do you have any blocks?", is_question=True)
        speech34 = Speech.objects.create(order=34, speaker=product_owner, content="No blocks on my end.", is_question=False)

        speech35 = Speech.objects.create(order=35, speaker=scrum_master, content="Grace, do you have any blocks?", is_question=True)
        speech36 = Speech.objects.create(order=36, speaker=designer, content="No blocks, everything is fine.", is_question=False)

        # Final check
        speech37 = Speech.objects.create(order=37, speaker=scrum_master, content="Alright, let's continue with the standup. Any final comments?", is_question=False)

        # Create daily meeting
        daily_meeting = Daily.objects.create(
            project_name="AI Tool Development",
            project_description="Developing an AI-powered tool for team collaboration",
            you=developer,  # This is now Bob (You)
            your_atributions="Implement and test new features.",
        )

        # Add speeches to the daily meeting
        daily_meeting.speeches.add(
            speech1, speech2, speech3, speech4, speech5, speech6, speech7, speech8, speech9, speech10,
            speech11, speech12, speech13, speech14, speech15, speech16, speech17, speech18, speech19,
            speech20, speech21, speech22, speech23, speech24, speech25, speech26, speech27, speech28,
            speech29, speech30, speech31, speech32, speech33, speech34, speech35, speech36, speech37
        )
        daily_meeting.save()

        # Add people to the daily meeting
        daily_meeting.people.add(tech_lead, developer, qa, pm, product_owner, scrum_master, designer)
        daily_meeting.save()

        self.stdout.write(self.style.SUCCESS('Successfully populated the data with a full conversation!'))
