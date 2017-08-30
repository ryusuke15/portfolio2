"""REST Contact View"""
from rest_framework.generics import CreateAPIView
from .serializers import ContactCreateSerializer
from contact.models import Contact
from rest_framework.permissions import AllowAny

class ContactCreateAPIView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactCreateSerializer
    permission_classes = [AllowAny]
