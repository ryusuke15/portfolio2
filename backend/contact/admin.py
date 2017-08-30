"""Contact Admin"""
from __future__ import unicode_literals
from django.contrib import admin
from .models import Contact

class ContactAdmin(admin.ModelAdmin):
    list_display = ["__unicode__","email","received","message"]
    class Meta:
        model = Contact

admin.site.register(Contact, ContactAdmin)
