from peewee import *

db = SqliteDatabase("./database.db")


class Thing(Model):
    name = CharField()
    user_id = IntegerField()

    class Meta:
        database = db


class User(Model):
    name = CharField()
    username = CharField()
    password = CharField()
    droits = BooleanField(null=True)
    lastLogin = DateTimeField()

    class Meta:
        database = db


class Projet(Model):
    titre = CharField()
    date = CharField()
    description = CharField()
    lien = CharField()
    langages = CharField()
    pourcentage = CharField()

    class Meta:
        database = db

class Pictures(Model):
    image = TextField()
    description = CharField()
    user_id = IntegerField()
    
    class Meta:
        database = db
        
db.connect()
db.create_tables([Thing, User, Projet, Pictures])


# db.execute_sql(
#     """INSERT INTO projet (titre, date, description, lien, langages, pourcentage) VALUES('Mise en relation des acteurs Low-Tech', 'Décembre 2023 à Janvier 2024', 'Site dynamique réalisé dans un cadre étudiant chez EFREI. Ce site met en relation divers acteurs dans le cadre d un projet de chantier participatif. Le site est majoritairement fait en php, html, css et javascript.', 'https://github.com/SyraxTarg/MiseEnRelationActeursLowTechClaireMaimiti', '["php", "Hack", "CSS"]', '[97.2, 1.8, 1.0]')"""
# )

# db.execute_sql(
#     """INSERT INTO projet
#        (titre, date, description, lien, langages, pourcentage)
#        VALUES (
#            'Atelier de ThreeJS',
#            'Avril 2024',
#            'Projet de fin de cours de ThreeJS. Le but de ce projet était de créer une scène dans le but de promouvoir un objet que l on aurait crée. Ce projet est majoritairement fait en Javascript et en Vue, il y a également des modèles Blender.',
#            'https://github.com/SyraxTarg/ThreeJS_saint-marc_maimiti_EFREI',
#            '["javascript", "Vue", "GLSL", "CSS", "HTML"]',
#            '[71.9, 24.0, 2.3, 1.4, 0.4]'
#        )
#     """
# )

# db.execute_sql(
#     """INSERT INTO projet
#        (titre, date, description, lien, langages, pourcentage)
#        VALUES (
#            'Projet api d un aéroport',
#            'Mars 2024',
#            "Projet de fin de cours de nodejs et api. C est une api qui serait utilisée dans le cadre d un aeroport. Le projet a ete fait en collaboration avec Claire Sbaffe.",
#            'https://github.com/clairesbaffe/projet_api_aeroport',
#            '["javascript"]',
#            '[100.0]'
#        )
#     """
# )

# db.execute_sql(
#     """INSERT INTO projet
#        (titre, date, description, lien, langages, pourcentage)
#        VALUES (
#            'Cartet de bord pour reves',
#            'Avril 2024',
#            "Projet de fin de cours d application mobile en react native. C est une application mobile qui permet a l utilisateur de repertorier ses reves et d avoir des informations sur les termes qu il a utilise.",
#            'https://github.com/SyraxTarg/dreamApp',
#            '["typescript", "javascript"]',
#            '[99.4, 0.6]'
#        )
#     """
# )

# db.execute_sql("DELETE FROM projet WHERE id = 16 ")

# db.execute_sql(
#     """INSERT INTO projet
#        (titre, date, description, lien, langages, pourcentage)
#        VALUES (
#            'Projet vue Js',
#            'Avril 2024',
#            "Projet de fin de cours de VueJS",
#            'https://github.com/SyraxTarg/projectVueJsMaimitiSaint-Marc',
#            '["Vue", "javascript", "CSS", "HTML"]',
#            '[58.7, 34.6, 5.8, 0.9]'
#        )
#     """
# )

# db.execute_sql("DROP TABLE user")
# db.execute_sql("UPDATE user SET droits = TRUE")
