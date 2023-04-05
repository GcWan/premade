from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from dotenv import load_dotenv
import requests
import os

load_dotenv()

api_key = os.getenv('API_KEY')

# Create your views here.
@api_view(['GET'])
def base(request):
    return Response()

@api_view(['GET'])
def getSummonerInfo(request, username):
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
    return Response(printstring)
