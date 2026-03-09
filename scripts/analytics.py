import pandas as pd

df = pd.read_csv("data/processed_jobs.csv")

print("\nTop Companies Hiring:\n")
print(df["company"].value_counts().head(10))

print("\nTop Job Titles:\n")
print(df["title"].value_counts().head(10))

print("\nTop Locations:\n")
print(df["location"].value_counts().head(10))

print("\nJob Levels:\n")
print(df["level"].value_counts())