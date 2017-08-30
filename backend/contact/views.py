"""Template View"""
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.views.decorators.csrf import ensure_csrf_cookie
from django.shortcuts import render

@ensure_csrf_cookie
def index(request):
  return render(request, "ang_index.html")
