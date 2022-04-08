from django.urls import path
from .migrations import views


urlpatterns = [
    path('', views.article_list),
    path('<int:pk>/', views.article_detail),
]
# music/'
# music/<int:pk>/ 