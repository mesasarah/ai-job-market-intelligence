from rest_framework import generics
from .models import Job
from .serializers import JobSerializer
from .skill_extractor import extract_skills

class JobListView(generics.ListAPIView):

    serializer_class = JobSerializer

    def get_queryset(self):

        queryset = Job.objects.all()

        skill = self.request.query_params.get("skill")
        
        if skill:
            queryset = queryset.filter(title__icontains=skill)

        return queryset