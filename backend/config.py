import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'dev-secret-key')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///lds_barrio.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    CERTIFICATE_SECRET_KEY = os.getenv('CERTIFICATE_SECRET_KEY', 'clave_certificados')
    UPLOAD_FOLDER = os.getenv('UPLOAD_FOLDER', 'uploads/')
    ALLOWED_EXTENSIONS = {'pdf', 'jpg', 'png', 'jpeg'}