from flask import jsonify, request
from models import LibraryItem, db
from . import library_bp

@library_bp.route('/', methods=['GET'])
def get_library_items():
    items = LibraryItem.query.order_by(LibraryItem.uploaded_at.desc()).all()
    return jsonify([{
        'id': i.id,
        'title': i.title,
        'description': i.description,
        'file_path': i.file_path
    } for i in items])

@library_bp.route('/add', methods=['POST'])
def add_library_item():
    data = request.json
    item = LibraryItem(
        title=data.get('title'),
        description=data.get('description'),
        file_path=data.get('file_path')
    )
    db.session.add(item)
    db.session.commit()
    return jsonify({'message': 'Ítem agregado a biblioteca'})
