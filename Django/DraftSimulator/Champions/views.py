from django.shortcuts import render
from .models import Champion
from django.http import HttpResponse, JsonResponse

def champion_list(request):
    champions = Champion.objects.order_by('name')
    
    """ if request.headers.get('accept') == 'application/json': """
        # Return JSON response
    champion_data = [{'name': champion.name, 'image': "http://localhost:8000"+ champion.image.url} for champion in champions]
    return JsonResponse(champion_data, safe=False)
    
    """ else:
        # Render template
        return render(request, 'champion_list.html', {'champions': champions}) """
