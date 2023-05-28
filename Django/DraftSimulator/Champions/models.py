from django.db import models

class Champion(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='icons/')
    role=models.CharField(max_length=100)
    role=models.CharField(max_length=100)

    def __str__(self):
        return Champion.name