# import requests

# url = "https://api.funtranslations.com/translate/valyrian.json"
# body = {"text": "hello"}  # Les données à envoyer doivent être un dictionnaire

# # Envoi de la requête POST avec les données
# response = requests.post(
#     "https://api.funtranslations.com/translate/valyrian.json", data=body
# )

# # Vérification du statut de la réponse
# if response.status_code == 200:
#     # Extraction et affichage de la réponse JSON
#     translated_text = response.json().get("contents", {}).get("translated", "")
#     print(f"Texte traduit en valyrian : {translated_text}")
# else:
#     print(f"Erreur lors de la requête : {response.status_code}")


from translate import Translator

translator = Translator(to_lang="en", from_lang="fr")
transltion = translator.translate("bonjour j'aime les chats")
print(transltion)
