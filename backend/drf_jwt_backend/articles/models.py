from django import urls
from django.db import models


# Create your models here.
class Articles(models.Model):

    title = models.CharField(max_length=255)
    urls = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
