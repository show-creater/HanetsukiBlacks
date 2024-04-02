from rest_framework import viewsets
from .models import Blog
from .serializers import BlogPostSerializer

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.order_by('-blog_time')
    serializer_class = BlogPostSerializer
    
class BlogLatest(viewsets.ModelViewSet):
    queryset = Blog.objects.order_by('-blog_time').first()
    serializer_class = BlogPostSerializer

