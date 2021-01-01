const fetch = require('node-fetch');
const querystring = require('querystring');

const urlBase = "http://service.kiwimobility.com"


const LVIV_LATLON = {
    "latitude": 49.844711008446126,
    "longitude": 24.00756043303686,
    "zoneId": 45,
}

const token = process.env.TOKEN_KIWI;

fetch(`${urlBase}/vehicle/search?${querystring.encode(LVIV_LATLON)}`, {
	headers: {
		"Accept-Language": "en-us",
		"Accept": "application/json, text/plain, */*",
		"Accept-Encoding": "gzip, deflate",
		"Authorization": `Bearer ${token}`,
	}
}).then(res => res.json()).then(console.log)

/*
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


def available_scooters(token):
	url_scooters = f"{url_base}/vehicle/search"
	response = requests.get(
		url_scooters,
		params=LVIV_LATLON,
		headers=dict(
			HEADERS,
			Authorization=f"Bearer {token}",
		)
	)
	data = response.json()
	return [to_simple_shape(d) for d in data]
*/
