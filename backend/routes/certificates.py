from flask import Blueprint, jsonify
# A futuro: lógica para generar PDFs
certificates_bp = Blueprint('certificates', __name__)

@certificates_bp.route('/generate/<int:record_id>', methods=['GET'])
def generate_certificate(record_id):
    # Aquí deberías generar el PDF usando ReportLab
    return jsonify({"message": f"Certificado generado para record {record_id}"})