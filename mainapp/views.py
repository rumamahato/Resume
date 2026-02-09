from django.shortcuts import render

def home(request):
    return render(request, 'mainapp/home.html')

def contact(request):
    return render(request, 'mainapp/contact.html')