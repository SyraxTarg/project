from flask import Flask, render_template
import getRoutes, postRoutes, deleteRoutes, putRoutes
import threading
import datetime

app = Flask(__name__)
app.config["SECRET_KEY"] = "popo"
app.permanent_session_lifetime = datetime.timedelta(days=2)


@app.errorhandler(404)
def pageNotFound(e):
    return render_template("404.html"), 404


@app.route("/api/v1/")
def home():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return getRoutes.home()


@app.get("/api/v1/things")
def get_things():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return getRoutes.get_things()


@app.get("/api/v1/users")
def get_users():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return getRoutes.get_users()


@app.get("/api/v1/user/<userId>")
def get_user(userId):
    with open("logs.log", "a") as f:
        f.write("request \n")
    return getRoutes.get_user(userId)


@app.get("/api/v1/projets")
def get_projects():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return getRoutes.get_projects()


@app.route("/api/v1/success/<name>")
def success(name):
    with open("logs.log", "a") as f:
        f.write("request \n")
    return getRoutes.success(name)


@app.route("/api/v1/newThingForm")
def newThingForm():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return postRoutes.newThingForm()


@app.route("/api/v1/newThing", methods=["POST"])
def newThing():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return postRoutes.newThing()


@app.route("/api/v1/signinForm")
def signinForm():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return postRoutes.signinForm()


@app.route("/api/v1/signin", methods=["POST"])
def signin():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return postRoutes.signin()


@app.route("/api/v1/loginForm")
def loginForm():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return postRoutes.loginForm()


@app.route("/api/v1/login", methods=["POST"])
def login():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return postRoutes.login()


@app.route("/api/v1/logoutForm")
def logoutForm():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return postRoutes.logoutForm()


@app.route("/api/v1/logout", methods=["POST"])
def logout():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return postRoutes.logout()


@app.route("/api/v1/things/<thingId>", methods=["DELETE"])
def deleteThings(thingId):
    with open("logs.log", "a") as f:
        f.write("request \n")
    return deleteRoutes.deleteThings(thingId)


@app.route("/api/v1/users/<userId>", methods=["DELETE"])
def deleteUsers(userId):
    with open("logs.log", "a") as f:
        f.write("request \n")
    return deleteRoutes.deleteUsers(userId)


@app.route("/api/v1/users/<int:userId>", methods=["PUT"])
def patchUsers(userId):
    with open("logs.log", "a") as f:
        f.write("request \n")
    return putRoutes.patchUsers(userId)


@app.route("/api/v1/things/<int:thingId>", methods=["PUT"])
def patchThings(thingId):
    with open("logs.log", "a") as f:
        f.write("request \n")
    return putRoutes.patchThings(thingId)


@app.route("/api/v1/myProjects")
def projectPage():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return getRoutes.projectPage()


@app.route("/api/v1/valyrianForm")
def valyrianForm():
    with open("logs.log", "a") as f:
        f.write("request \n")
    return postRoutes.valyrianForm()


# @app.route("/api/v1/valyrian", methods=["POST"])
# def valyrian():
#     with open("logs.log", "a") as f:
#         f.write("request \n")
#     return postRoutes.valyrian()


@app.route("/api/v1/picture")
def addPicture():
    return postRoutes.addPicture()


@app.route("/api/v1/addPicture", methods=["POST"])
def picture():
    return postRoutes.picture()


@app.route("/api/v1/files/<int:lim>/<int:offset>", methods=["GET"])
def get_files(lim, offset):
    return getRoutes.get_files(lim, offset)


@app.route("/api/v1/fileCount", methods=["GET"])
def get_files_count():
    return getRoutes.get_files_count()


@app.route("/api/v1/filesPage", methods=["GET"])
def filePage():
    try:
        return getRoutes.filePage()
    except Exception as err:
        return {"data": "connectez-vous pour continuer"}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
