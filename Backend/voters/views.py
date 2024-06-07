from django.shortcuts import render
from rest_framework import viewsets
from .serializers import VotersSerializer
from .models import Voters

# Create your views here.
class VotersView(viewsets.ModelViewSet):
    serializer_class = VotersSerializer
    queryset = Voters.objects.all()