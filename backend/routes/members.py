from flask import jsonify, request
from models import Member, db
from . import members_bp

@members_bp.route('/', methods=['GET'])
def get_members():
    barrio_code = request.args.get('barrio_code')
    if not barrio_code:
        return jsonify({'error': 'Se requiere código de barrio'}), 400
    members = Member.query.filter_by(barrio_code=barrio_code).all()
    return jsonify([{'id': m.id, 'full_name': m.full_name, 'date_of_birth': m.date_of_birth.isoformat()} for m in members])

@members_bp.route('/add', methods=['POST'])
def add_member():
    data = request.json
    member = Member(
        full_name=data.get('full_name'),
        date_of_birth=data.get('date_of_birth'),
        barrio_code=data.get('barrio_code')
    )
    db.session.add(member)
    db.session.commit()
    return jsonify({'message': 'Miembro agregado correctamente'})