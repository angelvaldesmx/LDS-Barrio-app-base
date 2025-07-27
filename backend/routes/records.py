from flask import request, jsonify
from models import Record, db
from . import records_bp
from datetime import datetime

@records_bp.route('/', methods=['GET'])
def get_records():
    member_id = request.args.get('member_id')
    if not member_id:
        return jsonify({'error': 'Se requiere ID de miembro'}), 400
    records = Record.query.filter_by(member_id=member_id).all()
    return jsonify([{
        'id': r.id,
        'record_type': r.record_type,
        'date': r.date.isoformat() if r.date else None,
        'details': r.details
    } for r in records])

@records_bp.route('/add', methods=['POST'])
def add_record():
    data = request.json
    try:
        date = datetime.fromisoformat(data.get('date')) if data.get('date') else None
    except:
        date = None

    record = Record(
        member_id=data.get('member_id'),
        record_type=data.get('record_type'),
        date=date,
        details=data.get('details')
    )
    db.session.add(record)
    db.session.commit()
    return jsonify({'message': 'Registro agregado correctamente'})