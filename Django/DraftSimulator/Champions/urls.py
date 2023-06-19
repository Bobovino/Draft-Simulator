from django.urls import path
from . import views
from .views import champion_list
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', champion_list, name='home'),
    path('champions/', champion_list, name='champion_list'),
    path('api/champions/', views.champion_list, name='champion-list'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
