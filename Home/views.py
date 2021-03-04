from django.shortcuts import render, HttpResponse
from django.contrib.auth.models import User
from django.urls import reverse
import re
from django.contrib.auth import login, logout, authenticate


def index(request):
    return render(request, 'Home/index.html')

# def login(request):
#     return render(request,'login.html')
