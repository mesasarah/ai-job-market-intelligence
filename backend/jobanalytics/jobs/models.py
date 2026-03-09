from django.db import models

class Job(models.Model):

    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=200)

    salary = models.FloatField(null=True, blank=True)

    skills = models.TextField()

    description = models.TextField()

    posted_date = models.DateField()

    def __str__(self):
        return self.title