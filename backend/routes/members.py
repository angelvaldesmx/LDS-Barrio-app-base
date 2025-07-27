from flask import request, jsonify
from models import Member, db
from . import members_bp

@members_bp.route('/', methods=['GET'])
def get_members():
    barrio_code = request.args.get('barrio_code')
    if not barrio_code:
        return jsonify({'error': 'Código de barrio requerido'}), 400

    members = Member.query.filter_by(barrio_code=barrio_code).all()
    data = []
    for m in members:
        data.append({
            'id': m.id,
            'full_name': m.full_name,
            'date_of_birth': m.date_of_birth.isoformat() if m.date_of_birth else None,
            'member_since': m.member_since.isoformat() if m.member_since else None
        })
    return jsonify(data)

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
    from flask import request, jsonify, abort
from models import Member, db, User

def check_admin():
    # ejemplo: recibir user_id desde request (simplificado)
    user_id = request.headers.get('user_id')
    user = User.query.get(user_id)
    if not user or user.role != 'admin':
        abort(403, 'Acceso denegado')

@members_bp.route('/add', methods=['POST'])
def add_member():
    check_admin()
    data = request.json
    # resto igual...