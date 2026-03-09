import spacy

nlp = spacy.load("en_core_web_sm")

skills = [
"python",
"sql",
"machine learning",
"aws",
"react",
"java",
"power bi",
"tableau"
]

def extract_skills(text):

    text = text.lower()

    found = []

    for skill in skills:
        if skill in text:
            found.append(skill)

    return found