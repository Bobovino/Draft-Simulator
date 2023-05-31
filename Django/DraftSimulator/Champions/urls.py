from django.urls import path
from . import views
from .views import champion_list

urlpatterns = [
    path('', champion_list, name='home'),
    path('champions/', champion_list, name='champion_list'),
]
