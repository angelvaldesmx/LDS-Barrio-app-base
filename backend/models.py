from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    barrio_code = db.Column(db.String(20), nullable=False)
    role = db.Column(db.String(20), default='member')  # member, leader, admin

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), nullable=False)
    date_of_birth = db.Column(db.Date)
    barrio_code = db.Column(db.String(20), nullable=False)
    member_since = db.Column(db.Date, default=datetime.utcnow)

class Record(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    member_id = db.Column(db.Integer, db.ForeignKey('member.id'), nullable=False)
    record_type = db.Column(db.String(50))  # Bautismo, Confirmacion, etc.
    date = db.Column(db.Date)
    details = db.Column(db.Text)
    uploaded_at = db.Column(db.DateTime, default=datetime.utcnow)

class Certificate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    member_id = db.Column(db.Integer, db.ForeignKey('member.id'), nullable=False)
    certificate_type = db.Column(db.String(50))
    issue_date = db.Column(db.DateTime, default=datetime.utcnow)
    issued_by = db.Column(db.String(50))
    file_path = db.Column(db.String(200))

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.Text)
    start_datetime = db.Column(db.DateTime)
    end_datetime = db.Column(db.DateTime)
    location = db.Column(db.String(150))

class LibraryItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150))
    description = db.Column(db.Text)
    file_path = db.Column(db.String(200))
    uploaded_at = db.Column(db.DateTime, default=datetime.utcnow)