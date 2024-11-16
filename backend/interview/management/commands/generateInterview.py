
from django.core.management.base import BaseCommand
from interview.models import Interview, InterviewType, InterviewLevel, InterviewTheme, InterviewSubTheme, Question, Answer

class Command(BaseCommand):
    help = 'Cria entrevistas de Backend com temas Django e Python e questões de nível Junior'

    def handle(self, *args, **kwargs):
        backend_theme = InterviewTheme.objects.create(name="Backend", interview_type=InterviewType.tech)
        
        django_subtheme = InterviewSubTheme.objects.create(name="Django", interview_theme=backend_theme)
        python_subtheme = InterviewSubTheme.objects.create(name="Python", interview_theme=backend_theme)

        interview = Interview.objects.create(
            interview_type=InterviewType.tech,
            level=InterviewLevel.junior,
        
        )

        interview.themes.add(backend_theme)
        interview.sub_themes.add(django_subtheme, python_subtheme)

        question1 = Question.objects.create(
            text="O que é uma view em Django?",
            interview_type=InterviewType.tech,
            level=InterviewLevel.junior
        )

        answer1_q1 = Answer.objects.create(
            text="Uma view em Django é uma função ou classe que recebe uma requisição e retorna uma resposta.",
            is_correct=True
        )
        answer2_q1 = Answer.objects.create(
            text="Uma view em Django é um tipo de banco de dados.",
            is_correct=False
        )

        question1.answers.add(answer1_q1, answer2_q1)

        question2 = Question.objects.create(
            text="O que é uma lista em Python?",
            interview_type=InterviewType.tech,
            level=InterviewLevel.junior
        )

        answer1_q2 = Answer.objects.create(
            text="Uma lista é uma coleção ordenada de elementos mutáveis.",
            is_correct=True
        )
        answer2_q2 = Answer.objects.create(
            text="Uma lista é uma variável para armazenar uma única string.",
            is_correct=False
        )

        question2.answers.add(answer1_q2, answer2_q2)

        question3 = Question.objects.create(
            text="O que é o Django ORM?",
            interview_type=InterviewType.tech,
            level=InterviewLevel.junior
        )

        answer1_q3 = Answer.objects.create(
            text="O Django ORM é um sistema que permite interagir com o banco de dados usando objetos Python.",
            is_correct=True
        )
        answer2_q3 = Answer.objects.create(
            text="O Django ORM é uma biblioteca de manipulação de strings no Python.",
            is_correct=False
        )

        question3.answers.add(answer1_q3, answer2_q3)

        question4 = Question.objects.create(
            text="O que é uma função lambda em Python?",
            interview_type=InterviewType.tech,
            level=InterviewLevel.junior
        )

        answer1_q4 = Answer.objects.create(
            text="Uma função lambda é uma função anônima que pode ter qualquer número de argumentos, mas apenas uma expressão.",
            is_correct=True
        )
        answer2_q4 = Answer.objects.create(
            text="Uma função lambda é uma função que pode ser definida apenas dentro de uma lista.",
            is_correct=False
        )

        question4.answers.add(answer1_q4, answer2_q4)

        question5 = Question.objects.create(
            text="Como você define uma URL em Django?",
            interview_type=InterviewType.tech,
            level=InterviewLevel.junior
        )

        answer1_q5 = Answer.objects.create(
            text="Você define URLs em Django no arquivo 'urls.py' utilizando o método path() ou re_path().",
            is_correct=True
        )
        answer2_q5 = Answer.objects.create(
            text="Você define URLs em Django dentro do arquivo 'settings.py'.",
            is_correct=False
        )

        question5.answers.add(answer1_q5, answer2_q5)

        interview.questions.add(question1, question2, question3, question4, question5)

        interview.save()

        self.stdout.write(self.style.SUCCESS('Entrevista "junior" e "tech" com questões de Backend (Django e Python) criada com sucesso!'))
