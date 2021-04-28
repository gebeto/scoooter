from .utils import HEADERS, LVIV_LATLON, url_base, get_json


def to_simple_shape(scooter):
    return {
        "service": "ewings",
        "type": "scooter",
        "id": scooter["scooterId"],
        "title": scooter["publicId"],
        "battery": int(scooter["batteryPercentage"] * 100),
        "location": {
            "lat": scooter["location"]["latitude"],
            "lon": scooter["location"]["longitude"],
        },
    }


async def available_scooters(token):
    url_scooters = f"{url_base}/scooters/available"
    response = await get_json(
        url_scooters,
        params=LVIV_LATLON,
        headers=dict(
            HEADERS,
            Authorization=f"Bearer {token}",
        )
    )
    data = response["data"]
    return [to_simple_shape(d) for d in data]
