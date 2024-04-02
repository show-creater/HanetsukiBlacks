from django.urls import path
from .views import ChatViewSet

urlpatterns = [
    path('get/all', ChatViewSet.as_view({'get': 'list', 'post': 'create'}), name='chat'),
]

