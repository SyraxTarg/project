from flask import render_template, request, url_for, redirect, session, make_response, flash, url_for
import db
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
from getCurrentUser import getCurrentUser
import requests
from translate import Translator
import datetime
import os
import base64

def newThingForm():
    user = getCurrentUser()
    return render_template("addThing.html", selected="add thing", user=user)


def newThing():
    user = getCurrentUser()
    thing = request.form["thing"]
    userId = user["id"]
    newThing = db.Thing(name=thing, user_id=userId)
    newThing.save()
    return redirect(url_for("home"))


def signinForm():
    user = getCurrentUser()
    return render_template("signup.html", selected="signin", user=user)


def signin():
    name = request.form["name"]
    email = request.form["email"]
    password = request.form["password"]

    query = db.db.execute_sql(f"SELECT username FROM user WHERE username = '{email}'")
    user = query.fetchone()
    if user:
        return "Cet utilisateur existe déjà."

    hashed_password = generate_password_hash(password)
    date = datetime.datetime.now()


    newUser = db.User(name=name, username=email, password=hashed_password, droits=False, lastLogin=date)
    newUser.save()
    if session.get("user"):
        session.clear()
    session["user"] = email
    session['name'] = name
    session['droits'] = False
    session['lastlogin'] = date
    response = make_response(render_template("login.php", user=user))
    response.headers["Content-Type"] = "text/html"
    return response, 200


def loginForm():
    user = getCurrentUser()
    return render_template("login.php", user=user)


def login():
    email = request.form["email"]
    password = request.form["password"]

    query = db.db.execute_sql(
        f"SELECT username, password, droits, name FROM user WHERE username = '{email}'"
    )
    user = query.fetchone()

    droits = user[2]
    name = user[3]

    if user and check_password_hash(user[1], password):
        session["user"] = email
        session['name'] = name
        session['droits'] = droits
        return redirect(url_for("home"))

    return redirect(url_for("loginForm"))


def logoutForm():
    user = getCurrentUser()
    return render_template("logout.php", user=user)


def logout():
    email = session.get('user')
    date = datetime.datetime.now()
    ##le time a deux heures de retard par rapport à notre heure
    db.db.execute_sql(f"UPDATE user SET lastLogin = strftime('%d-%m-%Y %H:%M:%S', DateTime('now'), 'localtime') WHERE username = '{email}'")
    session.clear()
    return redirect(url_for("home"))


def valyrianForm():
    user = getCurrentUser()
    return render_template('valyrian.html', user=user)

def valyrian():
    translator = Translator(to_lang="en", from_lang="fr")
    translation = translator.translate(f"{request.form["texte"]}")
    body = {"text": f"{translation}"} 

    response = requests.post(
        "https://api.funtranslations.com/translate/valyrian.json", data=body
    )

    if response.status_code == 200:
        return  response.json()
    else:
        return(f"Erreur lors de la requête : {response.status_code}")
    
def addPicture():
    user = getCurrentUser()
    return render_template('addFile.html', selected="add file", user=user)

UPLOAD_FOLDER = ".\\photos"
def picture():
    user = getCurrentUser()
    file = request.files['picture']
    desc = request.form['description']
    filename = secure_filename(file.filename)
    file.save(os.path.join(UPLOAD_FOLDER, filename))
    with open(os.path.join(UPLOAD_FOLDER, filename), 'rb') as image:
        picB64 = base64.b64encode(image.read())
        picB64 = picB64.decode()
    newImage = db.Pictures(image=picB64, description=desc, user_id=user['id'])
    newImage.save()
    os.remove(os.path.join(UPLOAD_FOLDER, filename))
    return redirect(url_for('filePage'))
