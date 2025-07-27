from flask import request, jsonify, current_app
from models import Certificate, db
from . import certificates_bp
from datetime import datetime

@certificates_bp.route('/issue', methods=['POST'])
def issue_certificate():
    data = request.json
    secret_key = data.get('secret_key')
    if secret_key != current_app.config['CERTIFICATE_SECRET_KEY']:
        return jsonify({'error': 'Clave secreta inválida'}), 403

    certificate = Certificate(
        member_id=data.get('member_id'),
        certificate_type=data.get('certificate_type'),
        issued_by=data.get('issued_by'),
        issue_date=datetime.utcnow(),
        file_path=data.get('file_path')
    )
    db.session.add(certificate)
    db.session.commit()
    return jsonify({'message': 'Certificado emitido correctamente'})

@certificates_bp.route('/validate/<int:cert_id>', methods=['GET'])
def validate_certificate(cert_id):
    cert = Certificate.query.get(cert_id)
    if not cert:
        return jsonify({'error': 'Certificado no encontrado'}), 404

    return jsonify({
        'id': cert.id,
        'member_id': cert.member_id,
        'certificate_type': cert.certificate_type,
        'issue_date': cert.issue_date.isoformat(),
        'issued_by': cert.issued_by,
        'file_path': cert.file_path
    })