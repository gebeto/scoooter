import re
import base64
from .utils import post_json, HEADERS, auth_url_base


PHONE_UUID = "4CBFCD52-9701-4D27-9AE2-428D4C52ACDF"
auth_params = {
    "country": "ua",
    "device_name": "iPad6,3",
    "device_os_version": "iOS13.6",
    "deviceId": "F8D03A68-A470-4A7C-BC49-02C6EEBBD720",
    "deviceType": "iphone",
    "gps_lat": "49.84468111511368",
    "gps_lng": "24.007619354435676",
    "language": "en",
    "lat": "49.84473229398187",
    "lng": "24.007695329413",
    "version": "CI.15.0",
    "session_id": "F8D03A68-A470-4A7C-BC49-02C6EEBBD720u1619601351",
}


async def request_sms(phone_number):
    url_request_sms = f"{auth_url_base}/user/register/phone/"
    response = await post_json(
        url_request_sms,
        headers=HEADERS,
        params=auth_params,
        json={
            "phone_uuid": PHONE_UUID,
            "preferred_verification_method": "sms",
            "appsflyer_id": "1619548678288-8036847",
            "phone": phone_number
        }
    )
    return response


async def confirm_sms(phone, code):
    url_confirm_sms = f"{auth_url_base}/user/confirmVerification"
    response = await post_json(
        url_confirm_sms,
        headers=HEADERS,
        params=auth_params,
        json={
            "phone_uuid": PHONE_UUID,
            "phone": phone,
            "verification": {
                "confirmation_data": {
                    "code": code
                }
            }
        }
    )
    return response


async def login():
    phone_number = input("Phone number: ")
    phone_number = re.sub(r"^\+?3?8?0?", "+380", phone_number)
    await request_sms(phone_number)
    code = input("Code from SMS: ")
    await confirm_sms(phone_number, code)
    token_b = base64.b64encode(f"{phone_number}:{PHONE_UUID}".encode("ascii"))
    token = token_b.decode("ascii")
    return token
