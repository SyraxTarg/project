from flask import jsonify, request
import db


def patchUsers(userId):
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")

    if not name or not email:
        return jsonify({"error": "Both name and email are required"}), 400

    try:
        db.db.execute_sql(
            f"UPDATE user SET name = '{name}', username = '{email}' WHERE id = {userId}'"
        )
        return jsonify({"message": "User patched"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


def patchThings(thingId):
    data = request.get_json()
    name = data.get("name")

    if not name:
        return jsonify({"error": "Name is required"}), 400

    try:
        db.db.execute_sql(f"UPDATE thing SET name = '{name}' WHERE id = {thingId}")
        return jsonify({"message": "Thing patched"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
