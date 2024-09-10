from flask import render_template, jsonify, session
import db


def getCurrentUser():
    user = None
    if session.get("user"):
        query = db.db.execute_sql(
            f"SELECT * FROM user WHERE username = '{session.get('user')}'"
        )
        for q in query:
            if q:
                user = {
                    "id": q[0],
                    "name": str(q[1]),
                    "username": str(q[2]),
                    "droits": q[4],
                    "lastLogin": q[5],
                }
            else:
                user = ""
    else:
        user = session.get("user")
    return user
