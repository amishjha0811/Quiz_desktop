# class Config:
#     SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:123456789@localhost/quizdb'
#     SQLALCHEMY_TRACK_MODIFICATIONS = False
#     JWT_SECRET_KEY = 'Tx8hQhy7qID1saFyEO44VuQRF3swrdJjnkMq3N+QtHI='
# config.py
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY')
