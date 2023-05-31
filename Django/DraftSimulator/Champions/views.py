from django.shortcuts import render
from .models import Champion
from django.http import HttpResponse

def champion_list(request):
    champions = Champion.objects.all()
    return render(request, 'champion_list.html', {'champions': champions})
