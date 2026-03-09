import spacy

nlp = spacy.load("en_core_web_sm")

skills_list = ["python","sql","machine learning","aws","react","java"]

def extract_skills(text):

    text = text.lower()

    found = []

    for skill in skills_list:
        if skill in text:
            found.append(skill)

    return found