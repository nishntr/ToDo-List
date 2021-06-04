from django.urls import path

from rest_framework import routers
from .api import TaskViewSet

router = routers.DefaultRouter()
router.register('', TaskViewSet, 'Tasks')

urlpatterns = router.urls
