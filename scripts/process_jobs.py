import pandas as pd

print("Loading LinkedIn dataset...")

df = pd.read_csv("data/linkedin_job_postings.csv")

print("Original rows:", len(df))

# Select useful columns
df = df[[
    "job_title",
    "company",
    "job_location",
    "job_level",
    "job_type",
    "search_country"
]]

# Rename columns for cleaner analytics
df = df.rename(columns={
    "job_title": "title",
    "company": "company",
    "job_location": "location",
    "job_level": "level",
    "job_type": "type",
    "search_country": "country"
})

# Drop missing values
df = df.dropna()

print("Rows after cleaning:", len(df))

# Save cleaned dataset
df.to_csv("data/processed_jobs.csv", index=False)

print("Processed dataset saved!")