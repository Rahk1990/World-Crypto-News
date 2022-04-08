
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import ArticlesSerializer
from .models import Articles
from django.shortcuts import get_object_or_404

@api_view(['GET', 'POST']) # handles calling the complete articleslist or to create a articles
def articles_list(request):
    
    articles = Articles.objects.all()

    if request.method == 'GET':

        serializer = ArticlesSerializer(articles, many=True)

        return Response(serializer.data)


    elif request.method == 'POST':

        serializer = ArticlesSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def articles_detail(request, pk):
   
    articles = get_object_or_404(Articles, pk=pk)
    
    if request.method == 'GET':
            
            serializer = ArticlesSerializer(articles)
            return Response(serializer.data)
            
    elif request.method == 'PUT':
            serializer = ArticlesSerializer(articles, data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)

    elif request.method == 'DELETE':
            articles.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)