# Generated by Django 4.2.1 on 2023-05-31 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Champions', '0003_rename_icon_champion_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='champion',
            name='image',
            field=models.ImageField(upload_to='C:/Users/rodry/Desktop/Draft Simulator/Draft-Simulator/Django/DraftSimulator/Champions/Data_Dragon/Champion_Images'),
        ),
    ]
