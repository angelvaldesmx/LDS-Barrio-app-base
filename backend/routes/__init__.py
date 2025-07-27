from flask import Blueprint

auth_bp = Blueprint('auth', __name__)
members_bp = Blueprint('members', __name__)
records_bp = Blueprint('records', __name__)
certificates_bp = Blueprint('certificates', __name__)
events_bp = Blueprint('events', __name__)
library_bp = Blueprint('library', __name__)
app.register_blueprint(uploads_bp, url_prefix='/uploads')

from .uploads import uploads_bp
from . import auth, members, records, certificates, events, library