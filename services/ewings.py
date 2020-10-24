import requests
import json


name = "ewings"
url_base = "https://api.scootapi.com"


HEADERS = {
    "Accept": "*/*",
    "Accept-Language": "en-us",
    "Content-Type": "application/json",
    "User-Agent": "E-wings/1 CFNetwork/1128.0.1 Darwin/19.6.0",
    "samokatoapp-version": "11",
    "samokatoapp-platform": "ios",
    "samokatoapp-appversion": "1.6.3",
    "samokatoapp-client": "2a0fceb8-fc66-47e9-8330-f6e1d21c7c80",
    "samokatoapp-tenant": "f56a90e4-893b-414e-ba52-a51591a0e909",
}

LVIV_LATLON = {
    "latitude": 49.8360948918759,
    "latitudeDelta": 0.3027925188486975,
    "longitude": 24.025636129081246,
    "longitudeDelta": 0.2639421075582504,
}


def request_sms(phone_number):
    url_request_sms = f"{url_base}/auth/request/sms-code"
    request = requests.post(
        url_request_sms,
        headers=HEADERS,
        data=json.dumps({
            "phoneNumber": phone_number
        })
    )
    return request.json()


def confirm_sms(phone_number, code):
    url_confirm_sms = f"{url_base}/auth/login/sms-code"
    request = requests.post(
        url_confirm_sms,
        headers=HEADERS,
        data=json.dumps({
            "phoneNumber": phone_number,
            "smsCode": code
        })
    )
    return request.json()["data"]["token"]


def login():
    phone_number = input("Phone number: ")
    request_sms(phone_number)
    code = input("Code from SMS: ")
    token = confirm_sms(phone_number, code)
    return token


def to_simple_shape(scooter):
    return {
        "type": "ewings",
        "id": scooter["scooterId"],
        "title": scooter["publicId"],
        "battery": int(scooter["batteryPercentage"] * 100),
        "location": {
            "lat": scooter["location"]["latitude"],
            "lon": scooter["location"]["longitude"],
        },
    }


def available_scooters(token):
    url_scooters = f"{url_base}/scooters/available"
    response = requests.get(
        url_scooters,
        params=LVIV_LATLON,
        headers=dict(
            HEADERS,
            Authorization=f"Bearer {token}",
        )
    )
    data = response.json()["data"]
    return [to_simple_shape(d) for d in data]
