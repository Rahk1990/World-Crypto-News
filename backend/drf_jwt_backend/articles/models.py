
from django.db import models


# Create your models here.
class Articles(models.Model):

    title = models.CharField(max_length=255)
    urls = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    comment = models.CharField(max_length=255, default='User Comments...')
    good = models.BooleanField(default=0)
    bad = models.BooleanField(default=0)
