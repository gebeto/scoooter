import json
import re

from ..utils import get_json, post_json


name = "kiwi"
url_base = "http://service.kiwimobility.com"


HEADERS = {
    "Accept-Language": "en-us",
    "Content-Type": "application/json;charset=utf-8",
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate",
}


LVIV_LATLON = {
    "latitude": 49.844711008446126,
    "longitude": 24.00756043303686,
    "zoneId": 45,
}
