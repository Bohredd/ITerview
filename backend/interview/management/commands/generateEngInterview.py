from django.core.management.base import BaseCommand
from interview.models import Interview, InterviewType, InterviewLevel, InterviewTheme, InterviewSubTheme, Question, Answer

class Command(BaseCommand):
    help = 'Creates a Frontend interview with React.js and TypeScript themes and junior-level questions'

    def handle(self, *args, **kwargs):
        # Create themes and sub-themes
        frontend_theme = InterviewTheme.objects.create(name="Frontend", interview_type=InterviewType.tech)
        
        react_subtheme = InterviewSubTheme.objects.create(name="React.js", interview_theme=frontend_theme)
        typescript_subtheme = InterviewSubTheme.objects.create(name="TypeScript", interview_theme=frontend_theme)

        # Create interview
        interview = Interview.objects.create(
            interview_type=InterviewType.tech,
            level=InterviewLevel.junior,
        )

        interview.themes.add(frontend_theme)
        interview.sub_themes.add(react_subtheme, typescript_subtheme)

        # Create React.js questions
        question1 = Question.objects.create(
            text="What is a React component?",
            interview_type=InterviewType.tech,
            level=InterviewLevel.junior
        )

        answer1_q1 = Answer.objects.create(
            text="A React component is a reusable piece of UI code that represents part of the interface.",
            is_correct=True
        )
        answer2_q1 = Answer.objects.create(
            text="A React component is a function for managing backend databases.",
            is_correct=False
        )

        question1.answers.add(answer1_q1, answer2_q1)

        question2 = Question.objects.create(
            text="What is JSX in React?",
            interview_type=InterviewType.tech,
            level=InterviewLevel.junior
        )

        answer1_q2 = Answer.objects.create(
            text="JSX is a syntax extension that allows mixing HTML with JavaScript.",
            is_correct=True
        )
        answer2_q2 = Answer.objects.create(
            text="JSX is a new programming language used in React.",
            is_correct=False
        )

        question2.answers.add(answer1_q2, answer2_q2)

        # Create TypeScript questions
        question3 = Question.objects.create(
            text="What is TypeScript?",
            interview_type=InterviewType.tech,
            level=InterviewLevel.junior
        )

        answer1_q3 = Answer.objects.create(
            text="TypeScript is a superset of JavaScript that adds static typing.",
            is_correct=True
        )
        answer2_q3 = Answer.objects.create(
            text="TypeScript is a framework for building mobile applications.",
            is_correct=False
        )

        question3.answers.add(answer1_q3, answer2_q3)

        question4 = Question.objects.create(
            text="What are interfaces used for in TypeScript?",
            interview_type=InterviewType.tech,
            level=InterviewLevel.junior
        )

        answer1_q4 = Answer.objects.create(
            text="Interfaces define the structure of an object and ensure type safety.",
            is_correct=True
        )
        answer2_q4 = Answer.objects.create(
            text="Interfaces are used to create database connections.",
            is_correct=False
        )

        question4.answers.add(answer1_q4, answer2_q4)

        question5 = Question.objects.create(
            text="How do you declare a variable with a specific type in TypeScript?",
            interview_type=InterviewType.tech,
            level=InterviewLevel.junior
        )

        answer1_q5 = Answer.objects.create(
            text="By using a colon followed by the type (e.g., let age: number;).",
            is_correct=True
        )
        answer2_q5 = Answer.objects.create(
            text="By adding the type in square brackets (e.g., let [age:number]).",
            is_correct=False
        )

        question5.answers.add(answer1_q5, answer2_q5)

        # Add questions to interview
        interview.questions.add(question1, question2, question3, question4, question5)

        interview.save()

        self.stdout.write(self.style.SUCCESS('Frontend "junior" and "tech" interview with React.js and TypeScript questions created successfully!'))
