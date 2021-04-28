import asyncio
import json
import sys

from scooters import get_scooters


def json_print(data):
    # json.dump(data, open("s.json", "w"), indent=4)
    print(json.dumps(data))


async def main():
    script, service_type, *rest = sys.argv
    scooters = await get_scooters(service_type)
    json_print(scooters)


if __name__ == '__main__':
    asyncio.run(main())
