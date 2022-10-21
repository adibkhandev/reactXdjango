from django.db import models

# Create your models here.	
class FrontTexts(models.Model):
	name= models.CharField(max_length=100)
	price = models.IntegerField()
	desc = models.CharField(max_length=50)
class Apidata(models.Model):
	name= models.CharField(max_length=100)
	price = models.IntegerField()
	desc = models.CharField(max_length=50)
	img = models.ImageField(upload_to='pics')
	