from .utils import get_json, url_base


def to_simple_shape(scooter):
    return {
        "service": "bolt",
        "type": scooter["type"],
        "id": scooter["id"],
        "title": scooter["name"],
        "battery": scooter["charge"],
        "location": {
            "lat": scooter["lat"],
            "lon": scooter["lng"],
        },
    }


async def available_scooters(token):
    url_scooters = f"{url_base}/categoriesOverview"
    response = await get_json(
        url_scooters,
        params={
            "country": "ua",
            "device_name": "iPad6,3",
            "device_os_version": "iOS13.6",
            "deviceId": "F8D03A68-A470-4A7C-BC49-02C6EEBBD720",
            "deviceType": "iphone",
            "gps_lat": "49.84468111511368",
            "gps_lng": "24.007619354435676",
            "language": "en",
            "lat": "49.847591707713",
            "lng": "24.0113902464509",
            "select_all": "true",
            "session_id": "19694640u1619548852",
            "user_id": "19694640",
            "version": "CI.15.0",
        },
        headers={
            "user-agent": "Bolt/45678466 CFNetwork/1128.0.1 Darwin/19.6.0",
            "authorization": f"Basic {token}",
            "accept-language": "en-us",
        }
    )
    data = response["data"]["categories"][0]["vehicles"]
    return [to_simple_shape(d) for d in data]
