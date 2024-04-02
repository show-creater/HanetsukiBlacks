# views.py
from rest_framework import viewsets
from .models import Chat
from .serializers import ChatSerializer

class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.order_by('chat_time')
    serializer_class = ChatSerializer
