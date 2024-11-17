from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('interview/', include('interview.urls')),
    path('dailies/', include('daily.urls')),
]
