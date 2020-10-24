import json
from pprint import pprint

from services import ewings, kiwi
from config import read_credentials, write_credentials


def json_print(data):
	print(json.dumps(data))


SERVICE = "ewings"
# SERVICE = "kiwi"

services = {
	"ewings": ewings,
	"kiwi": kiwi,
}

scooter_service = services[SERVICE]

token = read_credentials(SERVICE)
if not token:
	token = scooter_service.login()
	write_credentials(SERVICE, token)

json_print(scooter_service.available_scooters(token))
