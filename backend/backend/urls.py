from django.contrib import admin
from django.urls import path, include
from .views import index
from django.views.generic import TemplateView
from django.urls import re_path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("interview/", include("interview.urls")),
    path("dailies/", include("daily.urls")),
    path("plans/", include("plans.urls")),
    # path('feedback/', include('feedback.urls')),
    path("sentences/", include("sentences.urls")),
    path("user/", include("user.urls")),
    path("payment/", include("payment.urls")),
    path("", index, name="homeview"),
    re_path(
        r"^.*$",
        TemplateView.as_view(template_name="index.html"),
        name="react-app",
    ),
]
