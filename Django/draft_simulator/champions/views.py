from django.shortcuts import render
from django.http import JsonResponse
from .models import Champion

def champion_list(request):
    champions = Champion.objects.all().values()
    champion_list = list(champions)
    return JsonResponse(champion_list, safe=False)

