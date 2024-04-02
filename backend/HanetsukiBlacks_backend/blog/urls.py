# specialsite/urls.py

from django.urls import path
from .views import BlogPostViewSet

urlpatterns = [
    path('get/all', BlogPostViewSet.as_view({'get': 'list'}), name='blog'),
]

