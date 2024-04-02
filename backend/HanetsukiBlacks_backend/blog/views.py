from rest_framework import viewsets
from .models import Blog
from .serializers import BlogPostSerializer

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogPostSerializer

