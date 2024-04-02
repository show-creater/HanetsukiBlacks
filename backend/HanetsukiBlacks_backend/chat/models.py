from django.db import models

# Create your models here.
class Chat(models.Model):
    chatid = models.IntegerField(primary_key=True)
    chat_title = models.CharField(max_length=400)
    chat_content = models.TextField()
    chat_sender = models.CharField(max_length=100)
    chat_time = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.chatid} - {self.chat_title} - {self.chat_content} - {self.chat_sender} {self.chat_time}'