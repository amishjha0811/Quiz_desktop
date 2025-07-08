# app/__init__.py

from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import Config
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)

    @app.route('/')
    def index():
        return jsonify({'message': 'Quiz API is running.'})

    # Import and register blueprint *after* app and db are set up
    from app.routes import api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    return app
