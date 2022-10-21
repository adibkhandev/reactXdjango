from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from .models import Apidata,FrontTexts
from .serializer import Apidataserializer,FrontTextsserializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .forms2 import ApidataForm
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.





@api_view(['GET'])
def js(request):
    model = Apidata.objects.all()
    serialized = Apidataserializer(model,many=True)
    return Response(serialized.data)
@api_view(['GET'])
def testjs(request):
    model = FrontTexts.objects.all()
    serialized = FrontTextsserializer(model,many=True)
    return Response(serialized.data)

@api_view(['POST'])
def search(request):
    sentdata = request.data["searched"]
    model = Apidata.objects.filter(name__contains=sentdata)
    serialized = Apidataserializer(model,many=True)
    model = FrontTexts.objects.all()
    return Response(model)

@csrf_exempt
@api_view(['POST'])
def add(request):
    datarec = Apidataserializer(data=request.data)
    if datarec.is_valid():
      datarec.save()
      return Response(datarec.data)
     
    else:
      print('no')
      return Response(datarec.data)








def Admin(request):
    if (request.method == 'POST' ) :

     files = request.FILES
     image = files.get("image")
     name = request.POST["name"]
     namebase = name[0]
     price = request.POST["rating"]
     desc = request.POST["desc"]
     print(files.get)
     Apidata.objects.create(name=namebase,price=price,img=image,desc=desc)
     return render(request,'success.html')
    else:
      return render(request,'index.html')

    