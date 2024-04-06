# specialsite/urls.py

from django.urls import path
from .views import BlogPostViewSet
from .views import BlogLatest

urlpatterns = [
    path('get/all', BlogPostViewSet.as_view({'get': 'list', 'post':'create'}), name='blog'),
    path('get/all/latest', BlogLatest.as_view({'get': 'list'}), name='blog_latest'),
]

