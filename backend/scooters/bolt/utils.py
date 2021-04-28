from ..utils import get_json, post_json


name = "bolt"
auth_url_base = "https://user.bolt.eu"
url_base = "https://rental-search.bolt.eu"


HEADERS = {
    "accept": "*/*",
    "content-type": "application/json",
    "user-agent": "Bolt/45678466 CFNetwork/1128.0.1 Darwin/19.6.0",
    "accept-language": "en-us",
}


LVIV_LATLON = {
    "latitude": 49.844711008446126,
    "longitude": 24.00756043303686,
}


__all__ = [
    "get_json",
    "post_json",
    "name",
    "auth_url_base",
    "url_base",
    "HEADERS",
    "LVIV_LATLON",
]