from django.contrib import admin
from django.urls import path , include
from rest_framework import routers
from voters import views

router = routers.DefaultRouter()
router.register(r'Voters', views.VotersView, 'Voters')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
