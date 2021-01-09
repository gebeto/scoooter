import re
import json

from .utils import post_json, HEADERS, url_base


async def request_sms(phone_number):
    phone_number = re.sub("^3?8?0?", "", phone_number)
    url_request_sms = f"{url_base}/user/sign-with-phone"
    response = await post_json(
        url_request_sms,
        headers=HEADERS,
        data=json.dumps({
            "phone": phone_number,
            "phoneCountryCode": "380"
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
