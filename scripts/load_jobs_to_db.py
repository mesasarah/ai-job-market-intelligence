import os
import sys
import django
import pandas as pd

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# add correct django project path
DJANGO_PROJECT_PATH = os.path.join(BASE_DIR, "backend", "jobanalytics")

sys.path.append(DJANGO_PROJECT_PATH)

os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE",
    "jobanalytics.settings"
)

django.setup()

from jobs.models import Job

print("Loading dataset...")

df = pd.read_csv(os.path.join(BASE_DIR, "data", "processed_jobs.csv")).head(1000)

jobs = []

for _, row in df.iterrows():
    jobs.append(
        Job(
            title=row["title"],
            company=row["company"],
            location=row["location"],
            level=row["level"],
            job_type=row["type"],
            country=row["country"]
        )
    )

Job.objects.bulk_create(jobs, batch_size=1000)

print("Jobs inserted successfully!")