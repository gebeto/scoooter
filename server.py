from aiohttp import web
from main import get_all_scooters

async def index(request):
	return web.FileResponse("html/index.html")


async def scooters(request):
	return web.json_response(get_all_scooters())


app = web.Application()
app.add_routes([web.get('/', index)])
app.add_routes([web.get('/scooters.json', scooters)])
web.run_app(app, port=5000)