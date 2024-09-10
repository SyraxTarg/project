from flask import render_template, jsonify, session, make_response
import db
from getCurrentUser import getCurrentUser


def home():
    user = getCurrentUser()
    response = make_response(render_template("index.php", selected="home", user=user))
    response.headers["Content-Type"] = "text/html"
    return response, 200


def get_things():
    user = getCurrentUser()
    try:
        query = db.db.execute_sql(
            f"SELECT id, name FROM thing WHERE user_id = {user['id']}"
        )
    except:
        query = db.db.execute_sql(f"SELECT id, name FROM thing")
    things = [{"id": res[0], "name": res[1]} for res in query]
    response = make_response(jsonify(things))
    response.headers["Content-Type"] = "application/json"
    return response, 200


def get_users():
    query = db.db.execute_sql("SELECT * FROM user")
    users = [
        {"id": res[0], "name": res[1], "username": res[2], "droits": res[4]}
        for res in query
    ]
    response = make_response(jsonify(users))
    response.headers["Content-Type"] = "application/json"
    return response, 200


def get_user(id):
    query = db.db.execute_sql(f"SELECT * FROM user WHERE id = {id}")
    user = [
        {"id": res[0], "name": res[1], "username": res[2], "droits": res[4]}
        for res in query
    ]
    response = make_response(jsonify(user))
    response.headers["Content-Type"] = "application/json"
    return response, 200


def success(name):
    response = make_response(f"{name} successfully added")
    response.headers["Content-Type"] = "text/html"
    return response, 200


def get_projects():
    projects = []
    query = db.db.execute_sql("SELECT * FROM projet")
    for q in query:
        projet = {
            "titre": q[1],
            "date": q[2],
            "description": q[3],
            "lien": q[4],
            "langages": q[5],
            "pourcentages": q[6],
        }
        if projet not in projects:
            projects.append(projet)
    response = make_response(jsonify(projects))
    response.headers["Content-Type"] = "application/json"
    return response, 200


def projectPage():
    user = getCurrentUser()
    response = make_response(
        render_template("projects.html", selected="project", user=user)
    )
    response.headers["Content-Type"] = "text/html"
    return response, 200


def get_files(lim, offset):
    user = getCurrentUser()
    files = []
    query = db.db.execute_sql(f'SELECT * FROM pictures WHERE user_id = {user["id"]} LIMIT {offset}, {lim}')
    for q in query:
        newFile = {"id": q[0], "image": q[1], "description": q[2], "user": q[3]}
        files.append(newFile)
    response = make_response(jsonify(files))
    response.headers["Content-Type"] = "application/json"
    return response, 200


def get_files_count():
    user = getCurrentUser()
    # files = []
    query = db.db.execute_sql(
        f'SELECT COUNT(*) FROM pictures WHERE user_id = {user["id"]}'
    )
    for q in query:
        count = {"count": q[0]}
        # files.append(newFile)
    response = make_response(jsonify(count))
    response.headers["Content-Type"] = "application/json"
    return response, 200


def filePage():
    user = getCurrentUser()
    response = make_response(render_template("files.html", selected="file", user=user))
    response.headers["Content-Type"] = "text/html"
    return response, 200
