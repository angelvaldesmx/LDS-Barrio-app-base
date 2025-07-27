from flask import jsonify, request
from models import LibraryItem, db
from . import library_bp

@library_bp.route('/', methods=['GET'])
def get_library_items():
    items = LibraryItem.query