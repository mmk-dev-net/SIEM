from fastapi import FastAPI
from elasticsearch import Elasticsearch
from kafka import KafkaProducer
from datetime import datetime, timezone

app = FastAPI()

es = Elasticsearch("http://elasticsearch:9200")


@app.get("/")
def home():
    return {"status": "SIEM Running"}


@app.post("/logs")
def receive_logs(log: dict):
    log["timestamp"] = datetime.now(timezone.utc)

    es.index(
        index="security-logs",
        document=log
    )

    return {
        "message": "Log received",
        "data": log
    }


@app.get("/alerts")
def get_alerts():
    query = {
        "query": {
            "match": {
                "severity": "high"
            }
        }
    }

    results = es.search(
        index="security-logs",
        body=query
    )

    return results["hits"]["hits"]