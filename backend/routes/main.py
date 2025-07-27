from flask import Blueprint, jsonify

main_bp = Blueprint("main", __name__)

@main_bp.route("/api/ping")
def ping():
    return jsonify({"message": "pong"})
