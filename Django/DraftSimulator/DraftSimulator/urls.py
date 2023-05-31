from django.contrib import admin
from django.urls import include, path
from Champions import views 
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("champions/", include("Champions.urls")),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)