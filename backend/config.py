import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'devkey123')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///lds_barrio.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # Llaves extras
    CERTIFICATE_SECRET_KEY = os.getenv('CERTIFICATE_SECRET_KEY', 'clave_certificados')