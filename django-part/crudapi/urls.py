from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('', views.js),
    path('home/',TemplateView.as_view(template_name='index.html')),
    path('add/',views.add),
    path('test/', views.testjs),
    path('search/',views.search),
    # path('adm/',views.Admin)
]
urlpatterns = urlpatterns + static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

