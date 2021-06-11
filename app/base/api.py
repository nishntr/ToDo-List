from .models import Task
from rest_framework import viewsets, permissions
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    # queryset = Task.objects.all().order_by('-created')
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = TaskSerializer

    def get_queryset(self):
        return self.request.user.tasks.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
