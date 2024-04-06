from rest_framework import viewsets
from .models import Blog
from .serializers import BlogPostSerializer
# from django.http import JsonResponse
# from .models import Blog
# from django.views.decorators.csrf import csrf_exempt
# from django.core.files.base import ContentFile
# import base64

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.order_by('-blog_time')
    serializer_class = BlogPostSerializer
    
class BlogLatest(viewsets.ReadOnlyModelViewSet):
    serializer_class = BlogPostSerializer
    def get_queryset(self):
        # 最新のブログポストだけを含むクエリセットを返します
        return Blog.objects.order_by('-blog_time')[:1]
    
# @csrf_exempt
# def upload_image(request):
#     if request.method == 'POST':
#         # フロントエンドから送信された画像データを取得
#         image_data = request.FILES.get('image')
#         # モデルインスタンスを作成し、画像を保存
#         my_image = Blog.objects.create(image=image_data)
#         my_image.save()
        
#         return JsonResponse({'message': '画像がアップロードされました。', 'image_url': my_image.image.url})
#     return JsonResponse({'error': 'POSTリクエストではありません。'}, status=400)
    

