import sys
import json
from pprint import pprint

from services import ewings, kiwi
from config import read_credentials, write_credentials


def json_print(data):
	print(json.dumps(data))


scooter_services = {
	ewings.name: ewings,
	kiwi.name: kiwi,
}


def get_scooters(scooter_service):
	token = read_credentials(scooter_service.name)
	if not token:
		token = scooter_service.login()
		write_credentials(scooter_service.name, token)

	return scooter_service.available_scooters(token)


def get_all_scooters():
	scooters = []
	for scooter_service_key in scooter_services:
		scooters += get_scooters(scooter_services[scooter_service_key])
	return scooters


if __name__ == '__main__':
	script, service_type, *rest = sys.argv
	scooter_service = scooter_services[service_type]
	scooters = get_scooters(scooter_service)
	json_print(scooters)
