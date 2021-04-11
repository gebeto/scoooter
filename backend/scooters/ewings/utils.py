import json

from ..utils import get_json, post_json


name = "ewings"
url_base = "https://api.scootapi.com"


HEADERS = {
    "Accept": "*/*",
    "Accept-Language": "en-us",
    "Content-Type": "application/json",
    "User-Agent": "E-wings/1 CFNetwork/1128.0.1 Darwin/19.6.0",
    "samokatoapp-version": "11",
    "samokatoapp-platform": "ios",
    "samokatoapp-appversion": "1.6.6",
    "samokatoapp-client": "2a0fceb8-fc66-47e9-8330-f6e1d21c7c80",
    "samokatoapp-tenant": "f56a90e4-893b-414e-ba52-a51591a0e909",
}

LVIV_LATLON = {
    "latitude": 49.8360948918759,
    "latitudeDelta": 0.3027925188486975,
    "longitude": 24.025636129081246,
    "longitudeDelta": 0.2639421075582504,
}
