# app/routes.py

from flask import Blueprint, request, jsonify
from app.models import User, Quiz
from app import db
from app.utils import hash_password, verify_password, encode_jwt

api_bp = Blueprint('api', __name__)

@api_bp.route('/ping', methods=['GET'])
def ping():
    return jsonify({'message': 'pong'})

@api_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    if not data or not data.get('username') or not data.get('password') or not data.get('email'):
        return jsonify({'error': 'Missing required fields'}), 400

    if User.query.filter_by(username=data['username']).first():
        return jsonify({'error': 'Username already exists'}), 400
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Email already exists'}), 400

    new_user = User(
        username=data['username'],
        password_hash=hash_password(data['password']),
        email=data['email']
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

@api_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    if not data or not data.get('username') or not data.get('password'):
        return jsonify({'error': 'Missing username or password'}), 400

    user = User.query.filter_by(username=data['username']).first()

    if not user or not verify_password(data['password'], user.password_hash):
        return jsonify({'error': 'Invalid username or password'}), 401

    token = encode_jwt(user.id)

    return jsonify({
        'message': 'Login successful',
        'token': token,
        'user_id': user.id
    })

@api_bp.route('/quiz', methods=['GET'])
def get_quizzes():
    quizzes = Quiz.query.all()

    quizzes_data = [{
        'id': quiz.id,
        'title': quiz.title,
        'category': quiz.category
    } for quiz in quizzes]

    return jsonify(quizzes_data)
