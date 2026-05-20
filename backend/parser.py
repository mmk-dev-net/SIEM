import socket
import requests

UDP_IP = "0.0.0.0"
UDP_PORT = 514

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

sock.bind((UDP_IP, UDP_PORT))

print(f"Listening on UDP {UDP_PORT}")

while True:

    data, addr = sock.recvfrom(65535)

    message = data.decode(errors="ignore")

    payload = {
        "source_ip": addr[0],
        "severity": "high",
        "message": message,
        "device_name": "Firewall"
    }

    requests.post(
        "http://localhost:8000/logs",
        json=payload
    )

    print(f"Received log from {addr[0]}")