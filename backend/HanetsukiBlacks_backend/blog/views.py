from rest_framework import viewsets
from .models import Blog
from .serializers import BlogPostSerializer

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.order_by('-blog_time')
    serializer_class = BlogPostSerializer
    
class BlogLatest(viewsets.ReadOnlyModelViewSet):
    serializer_class = BlogPostSerializer
    def get_queryset(self):
        # 最新のブログポストだけを含むクエリセットを返します
        return Blog.objects.order_by('-blog_time')[:1]
    

