from django.shortcuts import render
from django.http import HttpResponse
from django.urls import resolve
import requests
# Create your views here.

api_key = 'RGAPI-ec2ff60b-f925-4e0b-88b8-adefea2d1401'

def getData(id):
    URL = "https://na"

def say_hello(request, username):
    summoner_url = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + username
    new_api_url = summoner_url + '?api_key=' + api_key
    requests.get(new_api_url)
    resp = requests.get(new_api_url)
    player_info = resp.json()
    printstring = 'puuid: '
    puuid = ''
    for key, value in player_info.items():
        if key == 'puuid':
            printstring += value
            puuid = value
    match_url = 'https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/'+ puuid +'/ids?start=0&count=20'
    new_api_url = match_url + '&api_key=' + api_key
    requests.get(new_api_url)
    resp = requests.get(new_api_url)
    for game in resp:
        printstring += str(game)
    return render(request, 'result.html', {'name': printstring})

def base(request):
    return render(request, 'search.html')

#return HttpResponse('Hello')

