"""backend URL Configuration"""
from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic.base import TemplateView
from contact.views import index
from django.contrib.sitemaps.views import sitemap
from .sitemaps import StaticViewSitemap

sitemaps = {'static': StaticViewSitemap}

admin.site.site_header = ("Ryu's Administration")
admin.site.site_title = ("Administration")

urlpatterns = [
  url(r'^admin/', admin.site.urls),
  url(r'^api/contacts/', include("contact.api.urls", namespace='contacts-api')),
  url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
  url(r'^robots\.txt', include('robots.urls')),
  url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
  url(r'^.*', index, name='index'),
]
