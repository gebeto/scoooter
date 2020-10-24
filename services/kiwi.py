import requests
import json
import re


url_base = "http://service.kiwimobility.com"
token = "TOKEN"


def request_sms(phone_number):
	phone_number = re.sub("^3?8?0?", "", phone_number)
	url_request_sms = f"{url_base}/user/sign-with-phone"
	request = requests.post(
		url_request_sms,
		# headers=HEADERS,
		data=json.dumps({
			"phoneCountryCode": "380",
			"phone": phone_number,
		})
	)
	return request.json()


def confirm_sms(id, code):
	url_confirm_sms = f"{url_base}/user/verify"
	request = requests.post(
		url_confirm_sms,
		# headers=HEADERS,
		data=json.dumps({
			"id": id,
			"authCode": code,
		})
	)
	return request.json()["token"]


def login():
    phone_number = input("Phone number: ")
    data = request_sms(phone_number)
    code = input("Code from SMS: ")
    token = confirm_sms(data["id"], code)
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


def available_scooters(token):
	url_scooters = f"{url_base}/vehicle/search"
	response = requests.get(
		url_scooters,
		params={
			"latitude": 49.844730516318464,
			"longitude": 24.007530360235208,
			"zoneId": 45,
		},
		headers={
			"Accept-Language": "en-us",
			"Accept": "application/json, text/plain, */*",
			"Authorization": f"Bearer {token}",
			"Accept-Encoding": "gzip, deflate",
		}
	)
	data = response.json()
	return [to_simple_shape(d) for d in data]
