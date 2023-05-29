from django.db import models

class Champion(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='Champion_Images/')
    role=models.CharField(max_length=100)

    def __str__(self):
        return Champion.name