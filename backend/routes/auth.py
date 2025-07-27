from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User
from . import auth_bp

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    barrio_code = data.get('barrio_code')

    if User.query.filter_by(username=username).first():
        return jsonify({'error': 'Usuario ya existe'}), 400

    user = User(username=username, barrio_code=barrio_code)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'Usuario registrado correctamente'})

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    user = User.query.filter_by(username=username).first()

    if not user or not user.check_password(password):
        return jsonify({'error': 'Credenciales inválidas'}), 401

    return jsonify({'message': f'Bienvenido {user.username}', 'barrio_code': user.barrio_code, 'role': user.role})