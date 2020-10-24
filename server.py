from aiohttp import web
from main import get_all_scooters


async def index(request):
    return web.FileResponse("html/index.html")


async def marker(request):
    return web.FileResponse(f"html/icon-{request.match_info['type']}.svg")


async def scooters(request):
    return web.json_response(get_all_scooters())


app = web.Application()
app.add_routes([web.get('/', index)])
app.add_routes([web.get('/scooters.json', scooters)])
app.add_routes([web.get('/marker-{type}.svg', marker)])
web.run_app(app, port=5000)
