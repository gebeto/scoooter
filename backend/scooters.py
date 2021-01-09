import itertools
import asyncio

from services import ewings, kiwi
from config import read_credentials, write_credentials


scooter_services = {
    ewings.name: ewings,
    kiwi.name: kiwi,
}


async def get_service_scooters(scooter_service):
    token = read_credentials(scooter_service.name)
    if not token:
        token = await scooter_service.login()
        write_credentials(scooter_service.name, token)
    scooters = await scooter_service.available_scooters(token)
    return scooters


async def get_all_scooters():
    servcs = [
        get_service_scooters(scooter_services[scooter_service_key])
        for scooter_service_key in scooter_services
    ]
    scooters_responses = await asyncio.gather(*servcs)
    scooters = list(itertools.chain(*scooters_responses))
    return scooters


async def get_scooters(service_type):
    if service_type == "all":
        scooters = await get_all_scooters()
    else:
        scooter_service = scooter_services[service_type]
        scooters = await get_service_scooters(scooter_service)
    return scooters
