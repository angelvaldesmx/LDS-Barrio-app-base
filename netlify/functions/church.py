import json
from church_of_jesus_christ import Ward

def handler(event, context):
    # Ejemplo: Buscar ward por nombre
    ward = Ward()
    results = ward.search("Mexico City")
    
    return {
        "statusCode": 200,
        "headers": { "Content-Type": "application/json" },
        "body": json.dumps(results)
    }
