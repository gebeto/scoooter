import json

from .utils import post_json, HEADERS, url_base


async def request_sms(phone_number):
    url_request_sms = f"{url_base}/auth/request/sms-code"
    response = await post_json(
        url_request_sms,
        headers=HEADERS,
        data=json.dumps({
            "phoneNumber": phone_number
        })
    )
    return response


async def confirm_sms(phone_number, code):
    url_confirm_sms = f"{url_base}/auth/login/sms-code"
    response = await post_json(
        url_confirm_sms,
        headers=HEADERS,
        data=json.dumps({
            "phoneNumber": phone_number,
            "smsCode": code
        })
    )
    return response["data"]["token"]


async def login():
    phone_number = input("Phone number: ")
    res = await request_sms(phone_number)
    code = input("Code from SMS: ")
    token = await confirm_sms(phone_number, code)
    return token
