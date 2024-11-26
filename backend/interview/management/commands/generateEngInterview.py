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
        # arrumar dupla questoes certas por pegunta e sempre a primeira certa (misturar)
        data = [
            {
                "interview": {"type": "Tech", "level": "Junior"},
                "themes": [
                    {"name": "Frontend", "subthemes": ["React.js", "TypeScript"]}
                ],
                "questions": [
                    {
                        "text": "What is a React component?",
                        "type": "Tech",
                        "level": "Junior",
                        "answers": [
                            {
                                "text": "A reusable piece of UI code that represents part of the interface.",
                                "is_correct": True,
                            },
                            {
                                "text": "A function for managing backend databases.",
                                "is_correct": False,
                            },
                            {
                                "text": "A JavaScript function or class that optionally accepts inputs and returns a React element.",
                                "is_correct": True,
                            },
                            {
                                "text": "An API for accessing data in React.",
                                "is_correct": False,
                            },
                        ],
                    },
                    {
                        "text": "What is JSX in React?",
                        "type": "Tech",
                        "level": "Junior",
                        "answers": [
                            {
                                "text": "A syntax extension for mixing HTML with JavaScript.",
                                "is_correct": True,
                            },
                            {
                                "text": "A new programming language used in React.",
                                "is_correct": False,
                            },
                            {
                                "text": "A way to write HTML-like code within JavaScript files.",
                                "is_correct": True,
                            },
                            {
                                "text": "A library for building React components.",
                                "is_correct": False,
                            },
                        ],
                    },
                    {
                        "text": "What is the Virtual DOM in React?",
                        "type": "Tech",
                        "level": "Junior",
                        "answers": [
                            {
                                "text": "An in-memory representation of the real DOM for efficient updates.",
                                "is_correct": True,
                            },
                            {
                                "text": "A storage system for caching user data in React apps.",
                                "is_correct": False,
                            },
                            {
                                "text": "A duplicate of the actual DOM that is used for testing.",
                                "is_correct": False,
                            },
                            {
                                "text": "A lightweight copy of the DOM used to improve rendering performance.",
                                "is_correct": True,
                            },
                        ],
                    },
                    {
                        "text": "What is the purpose of TypeScript in React projects?",
                        "type": "Tech",
                        "level": "Junior",
                        "answers": [
                            {
                                "text": "To provide static typing and catch errors at compile time.",
                                "is_correct": True,
                            },
                            {
                                "text": "To replace JavaScript entirely in React projects.",
                                "is_correct": False,
                            },
                            {
                                "text": "To style React components with a CSS-like syntax.",
                                "is_correct": False,
                            },
                            {
                                "text": "To improve code maintainability and enable better autocompletion in editors.",
                                "is_correct": True,
                            },
                        ],
                    },
                ],
            },
            {
                "interview": {"type": "Tech", "level": "Senior"},
                "themes": [{"name": "Backend", "subthemes": ["Python", "Django"]}],
                "questions": [
                    {
                        "text": "What is a Django model?",
                        "type": "Tech",
                        "level": "Senior",
                        "answers": [
                            {
                                "text": "Defines the structure of your database tables.",
                                "is_correct": True,
                            },
                            {
                                "text": "A template for rendering HTML.",
                                "is_correct": False,
                            },
                            {
                                "text": "A Python class used to map database rows to Python objects.",
                                "is_correct": True,
                            },
                            {
                                "text": "A function for handling HTTP requests in Django.",
                                "is_correct": False,
                            },
                        ],
                    },
                    {
                        "text": "What is a Python decorator?",
                        "type": "Tech",
                        "level": "Senior",
                        "answers": [
                            {
                                "text": "A function that modifies the behavior of another function.",
                                "is_correct": True,
                            },
                            {
                                "text": "A style guide for formatting Python code.",
                                "is_correct": False,
                            },
                            {
                                "text": "A syntax for creating complex conditional statements.",
                                "is_correct": False,
                            },
                            {
                                "text": "A tool for wrapping functions to add pre- or post-execution logic.",
                                "is_correct": True,
                            },
                        ],
                    },
                    {
                        "text": "What is Django ORM?",
                        "type": "Tech",
                        "level": "Senior",
                        "answers": [
                            {
                                "text": "An abstraction layer that allows developers to interact with databases using Python code.",
                                "is_correct": True,
                            },
                            {
                                "text": "A tool for managing static files in Django.",
                                "is_correct": False,
                            },
                            {
                                "text": "A method for rendering templates in Django.",
                                "is_correct": False,
                            },
                            {
                                "text": "A database migration tool.",
                                "is_correct": False,
                            },
                        ],
                    },
                    {
                        "text": "How can you improve Django application performance?",
                        "type": "Tech",
                        "level": "Senior",
                        "answers": [
                            {
                                "text": "Use caching mechanisms like Redis or Memcached.",
                                "is_correct": True,
                            },
                            {
                                "text": "Optimize queries using `select_related` and `prefetch_related`.",
                                "is_correct": True,
                            },
                            {
                                "text": "Use synchronous views for all database interactions.",
                                "is_correct": False,
                            },
                            {
                                "text": "Enable query logging for all production traffic.",
                                "is_correct": False,
                            },
                        ],
                    },
                ],
            },
            {
                "interview": {"type": "Tech", "level": "Junior"},
                "themes": [
                    {
                        "name": "Docker",
                        "subthemes": ["Containers", "Images", "Basic Commands"],
                    }
                ],
                "questions": [
                    {
                        "text": "What is Docker?",
                        "type": "Tech",
                        "level": "Junior",
                        "answers": [
                            {
                                "text": "A platform to create, deploy, and manage containers.",
                                "is_correct": True,
                            },
                            {
                                "text": "A programming language for building distributed systems.",
                                "is_correct": False,
                            },
                            {
                                "text": "A database management tool.",
                                "is_correct": False,
                            },
                            {
                                "text": "A virtualization platform for creating virtual machines.",
                                "is_correct": False,
                            },
                        ],
                    },
                    {
                        "text": "What is the difference between a Docker image and a Docker container?",
                        "type": "Tech",
                        "level": "Junior",
                        "answers": [
                            {
                                "text": "An image is a blueprint for a container; a container is a running instance of an image.",
                                "is_correct": True,
                            },
                            {
                                "text": "A container is used to create images.",
                                "is_correct": False,
                            },
                            {"text": "They are the same thing.", "is_correct": False},
                            {
                                "text": "An image is a running application, while a container is for storage.",
                                "is_correct": False,
                            },
                        ],
                    },
                    {
                        "text": "What is the purpose of the Dockerfile?",
                        "type": "Tech",
                        "level": "Junior",
                        "answers": [
                            {
                                "text": "To define the steps to build a Docker image.",
                                "is_correct": True,
                            },
                            {
                                "text": "To manage multiple containers simultaneously.",
                                "is_correct": False,
                            },
                            {
                                "text": "To define network rules for containers.",
                                "is_correct": False,
                            },
                            {
                                "text": "To create virtual machines for Docker.",
                                "is_correct": False,
                            },
                        ],
                    },
                ],
            },
            {
                "interview": {"type": "Tech", "level": "Mid"},
                "themes": [
                    {
                        "name": "Shell Scripting",
                        "subthemes": ["Bash", "Commands", "Scripting Basics"],
                    }
                ],
                "questions": [
                    {
                        "text": "What is a shell script?",
                        "type": "Tech",
                        "level": "Mid",
                        "answers": [
                            {
                                "text": "A text file containing a sequence of commands for the shell to execute.",
                                "is_correct": True,
                            },
                            {
                                "text": "A compiled program that runs on the kernel.",
                                "is_correct": False,
                            },
                            {
                                "text": "A graphical interface for managing Linux systems.",
                                "is_correct": False,
                            },
                            {"text": "A type of database schema.", "is_correct": False},
                        ],
                    },
                    {
                        "text": "How can you make a shell script executable?",
                        "type": "Tech",
                        "level": "Mid",
                        "answers": [
                            {"text": "Use the `chmod +x` command.", "is_correct": True},
                            {
                                "text": "Rename the file with a `.exe` extension.",
                                "is_correct": False,
                            },
                            {
                                "text": "Run it directly with `sudo`.",
                                "is_correct": False,
                            },
                            {
                                "text": "Copy it to the `/usr/bin` directory.",
                                "is_correct": False,
                            },
                        ],
                    },
                    {
                        "text": "What does the `#!/bin/bash` line at the start of a shell script indicate?",
                        "type": "Tech",
                        "level": "Mid",
                        "answers": [
                            {
                                "text": "It specifies the interpreter to be used for executing the script.",
                                "is_correct": True,
                            },
                            {
                                "text": "It comments out the script to prevent execution.",
                                "is_correct": False,
                            },
                            {
                                "text": "It initializes environment variables for the script.",
                                "is_correct": False,
                            },
                            {
                                "text": "It creates a log file for the script.",
                                "is_correct": False,
                            },
                        ],
                    },
                ],
            },
            {
                "interview": {"type": "Tech", "level": "Senior"},
                "themes": [
                    {
                        "name": "Nginx",
                        "subthemes": [
                            "Load Balancing",
                            "Reverse Proxy",
                            "Configuration",
                        ],
                    }
                ],
                "questions": [
                    {
                        "text": "What is Nginx?",
                        "type": "Tech",
                        "level": "Senior",
                        "answers": [
                            {
                                "text": "A high-performance web server and reverse proxy.",
                                "is_correct": True,
                            },
                            {
                                "text": "A programming framework for building APIs.",
                                "is_correct": False,
                            },
                            {
                                "text": "A database used for caching web content.",
                                "is_correct": False,
                            },
                            {
                                "text": "A monitoring tool for server logs.",
                                "is_correct": False,
                            },
                        ],
                    },
                    {
                        "text": "What is the role of Nginx as a reverse proxy?",
                        "type": "Tech",
                        "level": "Senior",
                        "answers": [
                            {
                                "text": "To forward client requests to backend servers and return responses to clients.",
                                "is_correct": True,
                            },
                            {
                                "text": "To cache static files for faster access.",
                                "is_correct": False,
                            },
                            {
                                "text": "To store and manage user sessions.",
                                "is_correct": False,
                            },
                            {
                                "text": "To directly host dynamic content like PHP.",
                                "is_correct": False,
                            },
                        ],
                    },
                    {
                        "text": "How can you configure load balancing with Nginx?",
                        "type": "Tech",
                        "level": "Senior",
                        "answers": [
                            {
                                "text": "Use the `upstream` directive to define backend servers.",
                                "is_correct": True,
                            },
                            {
                                "text": "Install a separate Nginx module for load balancing.",
                                "is_correct": False,
                            },
                            {
                                "text": "Enable load balancing by default in the configuration file.",
                                "is_correct": False,
                            },
                            {
                                "text": "Use the `proxy_cache` directive to distribute traffic.",
                                "is_correct": False,
                            },
                        ],
                    },
                ],
            },
            {
                "interview": {"type": "Tech", "level": "Senior"},
                "themes": [
                    {
                        "name": "Django REST Framework",
                        "subthemes": [
                            "API Development",
                            "Authentication",
                            "Serialization",
                        ],
                    }
                ],
                "questions": [
                    {
                        "text": "What is Django REST Framework (DRF)?",
                        "type": "Tech",
                        "level": "Senior",
                        "answers": [
                            {
                                "text": "A toolkit for building web APIs with Django.",
                                "is_correct": True,
                            },
                            {
                                "text": "A replacement for Django models.",
                                "is_correct": False,
                            },
                            {
                                "text": "A Python library for building CLI tools.",
                                "is_correct": False,
                            },
                            {
                                "text": "A library for testing Django applications.",
                                "is_correct": False,
                            },
                        ],
                    },
                    {
                        "text": "What is the role of serializers in DRF?",
                        "type": "Tech",
                        "level": "Senior",
                        "answers": [
                            {
                                "text": "To convert complex data types like QuerySets into JSON.",
                                "is_correct": True,
                            },
                            {
                                "text": "To manage database migrations in Django.",
                                "is_correct": False,
                            },
                            {
                                "text": "To validate HTTP headers in requests.",
                                "is_correct": False,
                            },
                            {
                                "text": "To manage authentication tokens for users.",
                                "is_correct": False,
                            },
                        ],
                    },
                    {
                        "text": "How does DRF handle authentication?",
                        "type": "Tech",
                        "level": "Senior",
                        "answers": [
                            {
                                "text": "It provides built-in classes for token-based and session-based authentication.",
                                "is_correct": True,
                            },
                            {
                                "text": "It automatically creates user accounts for all requests.",
                                "is_correct": False,
                            },
                            {
                                "text": "It uses only API keys for authentication.",
                                "is_correct": False,
                            },
                            {
                                "text": "It requires OAuth for all endpoints.",
                                "is_correct": False,
                            },
                        ],
                    },
                ],
            },
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
