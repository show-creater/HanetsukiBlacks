from django.db import models

# Create your models here.
class Blog(models.Model):
    blogid = models.IntegerField(primary_key=True)
    blog_title = models.CharField(max_length=400)
    blog_content = models.TextField()
    blog_image = models.ImageField(upload_to='my_images/', null=True)
    blog_time = models.DateTimeField(auto_now_add=True)
    
    
    def __str__(self):
        return f'{self.blogid} - {self.blog_title} - {self.blog_content} - {self.blog_image} - {self.blog_time}'