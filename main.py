import sys
import json
from pprint import pprint

from services import ewings, kiwi
from config import read_credentials, write_credentials

script, service_type, *rest = sys.argv


def json_print(data):
	print(json.dumps(data))


scooter_service = {
	ewings.name: ewings,
	kiwi.name: kiwi,
}[service_type]


token = read_credentials(scooter_service.name)
if not token:
	token = scooter_service.login()
	write_credentials(scooter_service.name, token)


res = scooter_service.available_scooters(token)
json_print(res)
