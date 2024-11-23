from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('interview/', include('interview.urls')),
    path('dailies/', include('daily.urls')),
    path('plans/', include('plans.urls')),
    # path('feedback/', include('feedback.urls')),
    path('sentences/', include('sentences.urls')),
    path('user/', include('user.urls')),
    path('payment/', include('payment.urls')),
]
