from flask import Blueprint, jsonify

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    # Implementar lógica real con tokens
    return jsonify({"message": "Login exitoso (demo)"})
