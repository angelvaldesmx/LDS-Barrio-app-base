from flask import jsonify, request
from models import Event, db
from . import events_bp
from datetime import datetime

@events_bp.route('/', methods=['GET'])
def get_events():
    now = datetime.utcnow()
    events = Event.query.filter(Event.start_datetime >= now).order_by(Event.start_datetime.asc()).all()
    data = []
    for e in events:
        data.append({
            'id': e.id,
            'title': e.title,
            'description': e.description,
            'start_datetime': e.start_datetime.isoformat() if e.start_datetime else None,
            'end_datetime': e.end_datetime.isoformat() if e.end_datetime else None,
            'location': e.location
        })
    return jsonify(data)

@events_bp.route('/add', methods=['POST'])
def add_event():
    data = request.json
    start_dt = datetime.fromisoformat(data.get('start_datetime'))
    end_dt = datetime.fromisoformat(data.get('end_datetime')) if data.get('end_datetime') else None

    event = Event(
        title=data.get('title'),
        description=data.get('description'),
        start_datetime=start_dt,
        end_datetime=end_dt,
        location=data.get('location')
    )
    db.session.add(event)
    db.session.commit()
    return jsonify({'message': 'Evento agregado correctamente'})