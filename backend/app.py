from flask import Flask
from flask_cors import CORS
from routes import register_blueprints
from models import db
from config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    CORS(app)
    register_blueprints(app)
    return app

app = create_app()

if __name__ == '__main__':
    app.run()
