from django.core.management.base import BaseCommand
from daily.models import (
    Person,
    PersonRole,
    Voices,
    Speech,
    Daily,
    ProbablyAnswer,
    Information,
)

class Command(BaseCommand):
    help = "Populate initial data for the project with a long conversation"

    def handle(self, *args, **kwargs):
        tech_lead, _ = Person.objects.get_or_create(
            name="Isa Haas",
            role=PersonRole.TECH_LEAD,
            voice=Voices.michelle,
            image="https://cdn.pixabay.com/photo/2018/01/02/09/47/woman-3055841_1280.jpg",
        )
        developer, _ = Person.objects.get_or_create(
            name="Nicolás D'Alessandro",
            role=PersonRole.DEVELOPER,
            is_you=True,
            image="https://cdn.pixabay.com/photo/2015/07/20/12/57/ambassador-852766_1280.jpg",
        )
        qa, _ = Person.objects.get_or_create(
            name="Djenifer",
            role=PersonRole.QUALITY_ASSURANCE,
            voice=Voices.ava,
            image="https://cdn.pixabay.com/photo/2017/08/26/21/40/people-2684421_1280.jpg",
        )
        pm, _ = Person.objects.get_or_create(
            name="Alan Patrick",
            role=PersonRole.PROJECT_MANAGER,
            voice=Voices.steffen,
            image="https://cdn.pixabay.com/photo/2022/09/02/20/03/man-7428290_1280.jpg",
        )
        product_owner, _ = Person.objects.get_or_create(
            name="Sergio Rochet",
            role=PersonRole.PRODUCT_OWNER,
            voice=Voices.guy,
            image="https://cdn.pixabay.com/photo/2024/05/24/05/13/man-8784286_1280.jpg",
        )
        scrum_master, _ = Person.objects.get_or_create(
            name="Fernando Lúcio",
            role=PersonRole.SCRUM_MASTER,
            voice=Voices.steffen,
            image="https://cdn.pixabay.com/photo/2024/02/13/07/05/ai-generated-8570323_1280.jpg",
        )
        designer, _ = Person.objects.get_or_create(
            name="Vitão",
            role=PersonRole.DESIGNER,
            voice=Voices.alonso,
            image="https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_1280.jpg",
        )

        speech1, _ = Speech.objects.get_or_create(
            order=1,
            speaker=scrum_master,
            content="Good morning, team! Let's begin the daily standup.",
            is_question=False,
        )

        speech2, _ = Speech.objects.get_or_create(
            order=2,
            speaker=scrum_master,
            content="Isa Haas, what did you do yesterday?",
            is_question=True,
        )
        speech3, _ = Speech.objects.get_or_create(
            order=3,
            speaker=tech_lead,
            content="Yesterday, I reviewed the code and discussed priorities with D'Alessandro.",
            is_question=False,
        )

        information, _ = Information.objects.get_or_create(
            title="Yesterday's work",
            content="You received a lot of problems from the client and you need to fix them. You also need to implement a new feature.",
        )

        speech4, _ = Speech.objects.get_or_create(
            order=4,
            speaker=scrum_master,
            content="D'Alessandro, what did you do yesterday?",
            is_question=True,
            is_to_you=True,
            information=information,
        )
        probably_answer1, _ = ProbablyAnswer.objects.get_or_create(
            answer="I fixed the bugs from yesterday.", is_correct=True
        )
        probably_answer2, _ = ProbablyAnswer.objects.get_or_create(
            answer="I added a new feature instead.",
            is_correct=False,
            penality="Focus on existing tasks before adding new ones.",
            who_says_penality=scrum_master,
        )

        speech4.probably_answers.add(probably_answer1, probably_answer2)

        speech5, _ = Speech.objects.get_or_create(
            order=5, speaker=scrum_master, content="Ok.", is_question=False
        )

        speech6, _ = Speech.objects.get_or_create(
            order=6,
            speaker=scrum_master,
            content="Djenifer, what did you do yesterday?",
            is_question=True,
        )
        speech7, _ = Speech.objects.get_or_create(
            order=7,
            speaker=qa,
            content="I tested the new feature and reported some bugs.",
            is_question=False,
        )

        speech8, _ = Speech.objects.get_or_create(
            order=8,
            speaker=scrum_master,
            content="Alanpa, what did you do yesterday?",
            is_question=True,
        )
        speech9, _ = Speech.objects.get_or_create(
            order=9,
            speaker=pm,
            content="I managed the team's progress and prepared some reports.",
            is_question=False,
        )

        speech10, _ = Speech.objects.get_or_create(
            order=10,
            speaker=scrum_master,
            content="Rochet, what did you do yesterday?",
            is_question=True,
        )
        speech11, _ = Speech.objects.get_or_create(
            order=11,
            speaker=product_owner,
            content="I met with the client to finalize the feature requests.",
            is_question=False,
        )

        speech12, _ = Speech.objects.get_or_create(
            order=12,
            speaker=scrum_master,
            content="Vitão, what did you do yesterday?",
            is_question=True,
        )
        speech13, _ = Speech.objects.get_or_create(
            order=13,
            speaker=designer,
            content="I worked on the UI for the new feature and reviewed design drafts.",
            is_question=False,
        )

        information, _ = Information.objects.get_or_create(
            title="Task for today",
            content="Implement the new feature and fix any bugs that have been noticed yesterday.",
        )

        speech14, _ = Speech.objects.get_or_create(
            order=14,
            speaker=scrum_master,
            content="D'Alessandro, what will you do today?",
            is_question=True,
            is_to_you=True,
            information=information,
        )

        probably_answer1, _ = ProbablyAnswer.objects.get_or_create(
            answer="I’ll implement the new feature and fix any bugs.", is_correct=True
        )
        probably_answer2, _ = ProbablyAnswer.objects.get_or_create(
            answer="I’ll work on a different task instead.",
            is_correct=False,
            penality="Focus on the assigned tasks for today.",
            who_says_penality=scrum_master,
        )

        speech14.probably_answers.add(probably_answer1, probably_answer2)

        speech15, _ = Speech.objects.get_or_create(
            order=15, speaker=scrum_master, content="Ok. Great!", is_question=False
        )

        speech16, _ = Speech.objects.get_or_create(
            order=16,
            speaker=scrum_master,
            content="Isa Haas, what will you do today?",
            is_question=True,
        )
        speech17, _ = Speech.objects.get_or_create(
            order=17,
            speaker=tech_lead,
            content="I’ll prepare the project report and assist the dev team.",
            is_question=False,
        )

        speech18, _ = Speech.objects.get_or_create(
            order=18,
            speaker=scrum_master,
            content="Djenifer, what will you do today?",
            is_question=True,
        )
        speech19, _ = Speech.objects.get_or_create(
            order=19,
            speaker=qa,
            content="I’ll test the new features and report any issues.",
            is_question=False,
        )

        speech20, _ = Speech.objects.get_or_create(
            order=20,
            speaker=scrum_master,
            content="Alanpa, what will you do today?",
            is_question=True,
        )
        speech21, _ = Speech.objects.get_or_create(
            order=21,
            speaker=pm,
            content="I’ll finalize the project timeline and communicate with the client.",
            is_question=False,
        )

        speech22, _ = Speech.objects.get_or_create(
            order=22,
            speaker=scrum_master,
            content="Rochet, what will you do today?",
            is_question=True,
        )
        speech23, _ = Speech.objects.get_or_create(
            order=23,
            speaker=product_owner,
            content="I’ll work on the product backlog and discuss priorities.",
            is_question=False,
        )

        speech24, _ = Speech.objects.get_or_create(
            order=24,
            speaker=scrum_master,
            content="Vitão, what will you do today?",
            is_question=True,
        )
        speech25, _ = Speech.objects.get_or_create(
            order=25,
            speaker=designer,
            content="I’ll finish the UI design and provide feedback on implementation.",
            is_question=False,
        )

        information, _ = Information.objects.get_or_create(
            title="Blocks",
            content="If you have any blocks, please share them with the team. Remember, you did all your work from yesterday and you will start a new feature and fix bugs. How can you have blocks if you did all your work?",
        )

        speech26, _ = Speech.objects.get_or_create(
            order=26,
            speaker=scrum_master,
            content="D'Alessandro, do you have any blocks?",
            is_question=True,
            is_to_you=True,
            information=information,
        )

        probably_answer1, _ = ProbablyAnswer.objects.get_or_create(
            answer="No blocks for today, everything is on track.", is_correct=True
        )
        probably_answer2, _ = ProbablyAnswer.objects.get_or_create(
            answer="I have some blocks that need to be addressed",
            is_correct=False,
            penality="You need to work on the assigned tasks for today.",
            who_says_penality=scrum_master,
        )

        speech26.probably_answers.add(probably_answer1, probably_answer2)

        speech27, _ = Speech.objects.get_or_create(
            order=27,
            speaker=scrum_master,
            content="Isa Haas, do you have any blocks?",
            is_question=True,
        )
        speech28, _ = Speech.objects.get_or_create(
            order=28,
            speaker=tech_lead,
            content="No blocks for today.",
            is_question=False,
        )

        speech29, _ = Speech.objects.get_or_create(
            order=29,
            speaker=scrum_master,
            content="Djenifer, do you have any blocks?",
            is_question=True,
        )
        speech30, _ = Speech.objects.get_or_create(
            order=30, speaker=qa, content="No blocks for today.", is_question=False
        )

        speech31, _ = Speech.objects.get_or_create(
            order=31,
            speaker=scrum_master,
            content="Alanpa, do you have any blocks?",
            is_question=True,
        )
        speech32, _ = Speech.objects.get_or_create(
            order=32, speaker=pm, content="No blocks, all is good.", is_question=False
        )

        speech33, _ = Speech.objects.get_or_create(
            order=33,
            speaker=scrum_master,
            content="Rochet, do you have any blocks?",
            is_question=True,
        )
        speech34, _ = Speech.objects.get_or_create(
            order=34,
            speaker=product_owner,
            content="No blocks on my end.",
            is_question=False,
        )

        speech35, _ = Speech.objects.get_or_create(
            order=35,
            speaker=scrum_master,
            content="Vitão, do you have any blocks?",
            is_question=True,
        )
        speech36, _ = Speech.objects.get_or_create(
            order=36,
            speaker=designer,
            content="No blocks, everything is fine.",
            is_question=False,
        )

        speech37, _ = Speech.objects.get_or_create(
            order=37,
            speaker=scrum_master,
            content="Alright, let's continue with the standup. Any final comments?",
            is_question=False,
        )

        daily_meeting, _ = Daily.objects.get_or_create(
            project_name="AI Tool Development",
            project_description="Developing an AI-powered tool for team collaboration",
            you=developer,
            your_atributions="Implement and test new features.",
        )

        daily_meeting.speeches.add(
            speech1,
            speech2,
            speech3,
            speech4,
            speech5,
            speech6,
            speech7,
            speech8,
            speech9,
            speech10,
            speech11,
            speech12,
            speech13,
            speech14,
            speech15,
            speech16,
            speech17,
            speech18,
            speech19,
            speech20,
            speech21,
            speech22,
            speech23,
            speech24,
            speech25,
            speech26,
            speech27,
            speech28,
            speech29,
            speech30,
            speech31,
            speech32,
            speech33,
            speech34,
            speech35,
            speech36,
            speech37,
        )
        daily_meeting.save()

        daily_meeting.people.add(
            tech_lead, developer, qa, pm, product_owner, scrum_master, designer
        )
        daily_meeting.save()

        self.stdout.write(
            self.style.SUCCESS(
                "Successfully populated the data with a full conversation!"
            )
        )
