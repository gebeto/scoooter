import json
import re

from .utils import get_json, post_json


name = "kiwi"
url_base = "http://service.kiwimobility.com"


HEADERS = {
    "Accept-Language": "en-us",
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate",
}


LVIV_LATLON = {
    "latitude": 49.844711008446126,
    "longitude": 24.00756043303686,
    "zoneId": 45,
}


async def request_sms(phone_number):
    phone_number = re.sub("^3?8?0?", "", phone_number)
    url_request_sms = f"{url_base}/user/sign-with-phone"
    response = await post_json(
        url_request_sms,
        headers=HEADERS,
        data=json.dumps({
            "phoneCountryCode": "380",
            "phone": phone_number,
        })
    )
    return response


async def confirm_sms(id, code):
    url_confirm_sms = f"{url_base}/user/verify"
    response = await post_json(
        url_confirm_sms,
        headers=HEADERS,
        data=json.dumps({
            "id": id,
            "authCode": code,
        })
    )
    return response["token"]


async def login():
    phone_number = input("Phone number: ")
    data = await request_sms(phone_number)
    code = input("Code from SMS: ")
    token = await confirm_sms(data["id"], code)
    return token


def to_simple_shape(scooter):
    return {
        "type": "kiwi",
        "id": scooter["id"],
        "title": scooter["name"],
        "battery": scooter["power"],
        "location": {
            "lat": scooter["coordinates"]["latitude"],
            "lon": scooter["coordinates"]["longitude"],
        },
    }


async def available_scooters(token):
    url_scooters = f"{url_base}/vehicle/search"
    data = await get_json(
        url_scooters,
        params=LVIV_LATLON,
        headers=dict(
            HEADERS,
            Authorization=f"Bearer {token}",
        )
    )
    return [to_simple_shape(d) for d in data]
