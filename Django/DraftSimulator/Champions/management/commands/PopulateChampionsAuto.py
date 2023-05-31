from django.core.management.base import BaseCommand
from django.core.files import File
from Champions.models import Champion
import json
import os

class Command(BaseCommand):
    help = 'Populate the database with champion data'

    def handle(self, *args, **options):
        with open('Champions\Data_Dragon\champion.json','r', encoding='utf-8') as f:
            data = json.load(f)


        for champion in data['data'].values():
            image_path = f"C:/Users/rodry/Desktop/Draft Simulator/Draft-Simulator/Django/DraftSimulator/Data_Dragon/Champion_Images/{champion['image']['full']}"
            with open(image_path, 'rb') as img:
                champion_name = 'Wukong' if champion['name'] == 'Monkeyking' else champion['name']
                champion_instance = Champion(name=champion_name)
                champion_instance.image.save(champion['image']['full'], File(img), save=False)
                champion_instance.save()
                self.stdout.write(self.style.SUCCESS(f'Successfully added champion "{champion_name}"'))