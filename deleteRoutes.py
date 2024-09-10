import db


def deleteThings(thingId):
    db.db.execute_sql(f"DELETE FROM thing WHERE id = {thingId}")
    return "deleted"


def deleteUsers(userId):
    db.db.execute_sql(f"DELETE FROM user WHERE id = {userId}")
    return "deleted"
 
 
 

