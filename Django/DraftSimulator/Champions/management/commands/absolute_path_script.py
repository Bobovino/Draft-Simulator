from Champions.models import Champion
import os

champions = Champion.objects.all()

for champion in champions:
    old_image_path = champion.image.path
    new_image_path = os.path.join('C:/Users/rodry/Desktop/Draft simulator/Draft-Simulator/Django/DraftSimulator/Champion_Images', os.path.basename(old_image_path))
    champion.image.name = new_image_path
    champion.save()