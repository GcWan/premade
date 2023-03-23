from django.shortcuts import render
from django.http import HttpResponse
from django.urls import resolve

# Create your views here.

def getData(id):
    URL = "https://na"

def say_hello(request, username):
    return render(request, 'result.html', {'name': username})

def base(request):
    return render(request, 'search.html')

#return HttpResponse('Hello')

