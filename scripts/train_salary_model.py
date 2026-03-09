import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import joblib

df = pd.read_csv("data/processed_jobs.csv")

df["title_len"] = df["title"].apply(len)

X = df[["title_len"]]
y = df.index

X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.2)

model = LinearRegression()

model.fit(X_train,y_train)

joblib.dump(model,"salary_model.pkl")

print("Model trained!")