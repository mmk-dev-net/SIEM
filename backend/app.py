from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

logs = []

@app.get("/")
def home():
    return {
        "status": "SIEM Backend Running"
    }

@app.post("/logs")
def receive_log(log: dict):

    log["timestamp"] = str(datetime.utcnow())

    logs.append(log)

    return {
        "message": "Log Received"
    }

@app.get("/logs")
def get_logs():
    return logs

@app.get("/alerts")
def get_alerts():

    alerts = []

    for log in logs:

        if log.get("severity") in ["high", "critical"]:

            alerts.append(log)

    return alerts