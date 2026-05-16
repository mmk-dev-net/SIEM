import socket
import json
import requests

UDP_IP = "0.0.0.0"
UDP_PORT = 514

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind((UDP_IP, UDP_PORT))

print(f"Listening on UDP {UDP_PORT}")

while True:
    data, addr = sock.recvfrom(65535)

    log = {
        "source_ip": addr[0],
        "message": data.decode(errors="ignore"),
        "severity": "medium"
    }

    requests.post(
        "http://localhost:8000/logs",
        json=log
    )