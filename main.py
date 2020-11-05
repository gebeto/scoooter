import asyncio
import json
import sys

from scooters import get_scooters


def json_print(data):
    print(json.dumps(data))


async def main():
    script, service_type, *rest = sys.argv
    scooters = get_scooters(service_type)
    json_print(scooters)


if __name__ == '__main__':
    asyncio.run(main())
