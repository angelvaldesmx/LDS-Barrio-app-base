from flask import Flask
from flask_cors import CORS
from routes import auth_bp, members_bp, records_bp, certificates_bp, events_bp, library_bp
from config import Config
from models import db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    db.init_app(app)
    CORS(app)

    # Registrar blueprints
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(members_bp, url_prefix='/members')
    app.register_blueprint(records_bp, url_prefix='/records')
    app.register_blueprint(certificates_bp, url_prefix='/certificates')
    app.register_blueprint(events_bp, url_prefix='/events')
    app.register_blueprint(library_bp, url_prefix='/library')

    @app.route('/')
    def index():
        return {"message": "Bienvenido al API LDS Barrio"}

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)