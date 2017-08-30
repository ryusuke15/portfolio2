"""REST Contact Serialization"""
from django.conf import settings
from rest_framework import serializers
from django.core.mail import EmailMultiAlternatives
from contact.models import Contact
from config.secret import EMAIL

class ContactCreateSerializer(serializers.Serializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.EmailField()
    message = serializers.CharField()

    def create(self, validated_data):
        firstName = self.data.get('first_name')
        lastName = self.data.get('last_name')
        Email = self.data.get('email')
        Message = self.data.get('message')
        Name = firstName + ' ' + lastName

        subject = 'Contact from'+' '+ Name
        from_email = EMAIL['user']
        body  = 'Name: %s<br/>Contact: %s<br/>Message: %s<br/>'%(Name, Email, Message)
        to = 'ryusukelavalla@gmail.com'
        html_content = body
        text_content = 'Email Received'
        msg = EmailMultiAlternatives(
            subject,
            text_content,
            from_email,
            [to]
        )
        msg.attach_alternative(html_content, "text/html")
        msg.send()
        return Contact.objects.create(**validated_data)
