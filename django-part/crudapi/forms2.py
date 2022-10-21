from django import forms
from .models import Apidata

class ApidataForm(forms.ModelForm):
	class Meta:
		model = Apidata
		fields = '__all__'