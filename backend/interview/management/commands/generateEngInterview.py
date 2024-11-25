from django.core.management.base import BaseCommand
from interview.models import (
    Interview,
    InterviewType,
    InterviewLevel,
    InterviewTheme,
    InterviewSubTheme,
    Question,
    Answer,
)


class Command(BaseCommand):
    help = "Creates multiple interviews dynamically based on predefined data"

    def handle(self, *args, **kwargs):
        data = [
            {
                "interview": {
                    "type": "Tech",
                    "level": "Junior",
                },
                "themes": [
                    {
                        "name": "Frontend",
                        "subthemes": ["React.js", "TypeScript"],
                    }
                ],
                "questions": [
                    {
                        "text": "What is a React component?",
                        "type": "Tech",
                        "level": "Junior",
                        "answers": [
                            {"text": "A reusable piece of UI code that represents part of the interface.", "is_correct": True},
                            {"text": "A function for managing backend databases.", "is_correct": False}
                        ]
                    },
                    {
                        "text": "What is JSX in React?",
                        "type": "Tech",
                        "level": "Junior",
                        "answers": [
                            {"text": "A syntax extension for mixing HTML with JavaScript.", "is_correct": True},
                            {"text": "A new programming language used in React.", "is_correct": False}
                        ]
                    }
                ]
            },
            {
                "interview": {
                    "type": "Tech",
                    "level": "Senior",
                },
                "themes": [
                    {
                        "name": "Backend",
                        "subthemes": ["Python", "Django"],
                    }
                ],
                "questions": [
                    {
                        "text": "What is a Django model?",
                        "type": "Tech",
                        "level": "Senior",
                        "answers": [
                            {"text": "Defines the structure of your database tables.", "is_correct": True},
                            {"text": "A template for rendering HTML.", "is_correct": False}
                        ]
                    },
                    {
                        "text": "What is a Python decorator?",
                        "type": "Tech",
                        "level": "Senior",
                        "answers": [
                            {"text": "A function that modifies the behavior of another function.", "is_correct": True},
                            {"text": "A style guide for formatting Python code.", "is_correct": False}
                        ]
                    }
                ]
            }
        ]

        for item in data:
            # Criar a entrevista
            interview = Interview.objects.create(
                interview_type=item["interview"]["type"],
                level=item["interview"]["level"],
            )

            # Criar temas e subtemas
            for theme in item["themes"]:
                interview_theme, _ = InterviewTheme.objects.get_or_create(
                    name=theme["name"], interview_type=item["interview"]["type"]
                )
                interview.themes.add(interview_theme)

                for subtheme_name in theme["subthemes"]:
                    subtheme, _ = InterviewSubTheme.objects.get_or_create(
                        name=subtheme_name, interview_theme=interview_theme
                    )
                    interview.sub_themes.add(subtheme)

            # Criar perguntas e respostas
            for question_data in item["questions"]:
                question = Question.objects.create(
                    text=question_data["text"],
                    interview_type=question_data["type"],
                    level=question_data["level"],
                )
                interview.questions.add(question)

                for answer_data in question_data["answers"]:
                    answer, _ = Answer.objects.get_or_create(
                        text=answer_data["text"], is_correct=answer_data["is_correct"]
                    )
                    question.answers.add(answer)

            self.stdout.write(
                self.style.SUCCESS(
                    f'Interview for "{item["interview"]["level"]}" level and type "{item["interview"]["type"]}" created successfully!'
                )
            )
