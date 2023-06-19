from django.db import models

class Champion(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='C:/Users/rodry/Desktop/Draft simulator/Draft-Simulator/Django/DraftSimulator/')
    role=models.CharField(max_length=100)

    def __str__(self):
        return self.name
    

