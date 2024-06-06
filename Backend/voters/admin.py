from django.contrib import admin
from .models import Voters

class VotersAdmin(admin.ModelAdmin):
    list_display = ('studentId', 'firstName', 'lastName', 'email', 'department', 'createdAt')
# Register your models here.
admin.site.register(Voters, VotersAdmin)