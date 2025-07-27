from flask import Blueprint, jsonify, request
from models import db, Record

records_bp = Blueprint('records', __name__)

@records_bp.route('/', methods=['GET'])
def get_records():
    records = Record.query.all()
    return jsonify([{"id": r.id, "type": r.type} for r in records])

@records_bp.route('/', methods=['POST'])
def create_record():
    data = request.json
    record = Record(member_id=data['member_id'], type=data['type'], date=data['date'])
    db.session.add(record)
    db.session.commit()
    return jsonify({"message": "Registro creado"})