# utils.py - Helper functions will be defined here 

import jwt
from werkzeug.security import generate_password_hash, check_password_hash
from flask import current_app
from datetime import datetime, timedelta

# Password hashing

def hash_password(password):
    return generate_password_hash(password)

def verify_password(password, password_hash):
    return check_password_hash(password_hash, password)

# JWT helpers

def encode_jwt(user_id):
    payload = {
        'user_id': user_id,
        'exp': datetime.utcnow() + timedelta(hours=12)
    }
    return jwt.encode(payload, current_app.config['JWT_SECRET_KEY'], algorithm='HS256')

def decode_jwt(token):
    try:
        payload = jwt.decode(token, current_app.config['JWT_SECRET_KEY'], algorithms=['HS256'])
        return payload['user_id']
    except Exception:
        return None 