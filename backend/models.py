from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    birthdate = db.Column(db.String(10))
    status = db.Column(db.String(50))

class Record(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    member_id = db.Column(db.Integer, db.ForeignKey('member.id'))
    type = db.Column(db.String(50))  # bautismo, confirmación, etc.
    date = db.Column(db.String(10))

class Certificate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    record_id = db.Column(db.Integer, db.ForeignKey('record.id'))
    file_path = db.Column(db.String(255))
