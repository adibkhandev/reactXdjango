from rest_framework import serializers
from .models import Apidata,FrontTexts

class Apidataserializer(serializers.ModelSerializer):
	class Meta:
		model = Apidata
		fields = '__all__'

class FrontTextsserializer(serializers.ModelSerializer):
	class Meta:
		model = FrontTexts
		fields = '__all__'
		