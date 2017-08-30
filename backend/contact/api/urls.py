from django.conf.urls import url
from .views import ContactCreateAPIView

urlpatterns = [
    url(r'^create/$', ContactCreateAPIView.as_view(), name='create')
]
