from flask import Blueprint, jsonify

fs_bp = Blueprint('familysearch', __name__)

@fs_bp.route('/import', methods=['POST'])
def import_from_fs():
    return jsonify({"message": "Importación simulada desde FamilySearch"})