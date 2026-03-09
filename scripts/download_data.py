import pandas as pd
import os

# dataset URL (working dataset)
url = "https://raw.githubusercontent.com/selva86/datasets/master/JobPosts.csv"

print("Downloading dataset...")

df = pd.read_csv(url)

# create data folder if it doesn't exist
os.makedirs("data", exist_ok=True)

# save dataset
df.to_csv("data/jobs.csv", index=False)

print("Dataset downloaded successfully!")
print("Total rows:", len(df))