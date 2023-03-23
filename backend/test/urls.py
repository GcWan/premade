from django.urls import path
from . import views

#URLconf
urlpatterns = [
    path('', views.base),
    path('<str:username>/', views.say_hello)
]