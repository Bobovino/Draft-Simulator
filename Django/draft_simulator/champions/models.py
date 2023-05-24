from django.db import models

class Champion(models.Model):
    name = models.CharField(max_length=100)
    #role = models.CharField(max_length=100)
    image = models.CharField(max_length=100)