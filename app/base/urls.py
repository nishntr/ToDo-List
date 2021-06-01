from django.urls import path
# from .views import CustomLoginView, RegisterPage,  HomeView
# , TaskDetail, TaskUpdate, DeleteView,TaskList, TaskCreate,TaskReorder
from django.contrib.auth.views import LogoutView

from rest_framework import routers
from .api import TaskViewSet

router = routers.DefaultRouter()
router.register('', TaskViewSet, 'Tasks')

urlpatterns = router.urls


# urlpatterns = [
#     path('login/', CustomLoginView.as_view(), name='login'),
#     path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
#     path('register/', RegisterPage.as_view(), name='register'),
#     path('', HomeView.as_view(), name='home'),

# path('', TaskList.as_view(), name='tasks'),
# path('task/<int:pk>/', TaskDetail.as_view(), name='task'),
# path('task-create/', TaskCreate.as_view(), name='task-create'),
# path('task-update/<int:pk>/', TaskUpdate.as_view(), name='task-update'),
# path('task-delete/<int:pk>/', DeleteView.as_view(), name='task-delete'),
# path('task-reorder/', TaskReorder.as_view(), name='task-reorder'),
# ]
