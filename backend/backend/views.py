from django.shortcuts import render
from django.conf import settings


def index(request):
    import os
    print("Actual path im", os.getcwd())
    print("What have in os.getcwd()", os.listdir(os.getcwd()))
    print("What have in the parent directory", os.listdir(os.path.join(os.getcwd(), "..")))
    print("Resolved path to 'frontend/dist':", os.path.join(settings.BASE_DIR, "frontend", "dist"))

    return render(request, "index.html")
