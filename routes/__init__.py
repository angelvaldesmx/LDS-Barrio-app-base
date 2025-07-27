from .auth import auth_bp
from .members import members_bp
from .records import records_bp
from .certificates import certificates_bp
from .familysearch import fs_bp

def register_blueprints(app):
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(members_bp, url_prefix='/members')
    app.register_blueprint(records_bp, url_prefix='/records')
    app.register_blueprint(certificates_bp, url_prefix='/certificates')
    app.register_blueprint(fs_bp, url_prefix='/familysearch')
