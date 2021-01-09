from .utils import LVIV_LATLON, HEADERS, get_json, url_base


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


async def available_scooters(token):
    url_scooters = f"{url_base}/vehicle/search"
    data = await get_json(
        url_scooters,
        params=LVIV_LATLON,
        headers=dict(
            HEADERS,
            Authorization=f"Bearer {token}",
        )
    )
    return [to_simple_shape(d) for d in data]
