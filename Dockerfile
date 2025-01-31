# 1. Utilisation d'une image Python légère
FROM python:3.11-slim

# 2. Définition du répertoire de travail
WORKDIR /app

# 3. Copie des fichiers de dépendances
COPY requirements.txt .

# 4. Installation des dépendances
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copie du code source
COPY . .

# 6. Exposition du port Flask
EXPOSE 5000

# 7. Commande de démarrage
CMD ["python", "app.py"]
