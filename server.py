from aiohttp import web
from main import get_scooters


async def index(request):
    return web.FileResponse("html/index.html")


async def marker(request):
    return web.FileResponse(f"html/icon-{request.match_info['type']}.svg")


async def scooters_all(request):
    return web.json_response(
        await get_scooters("all")
    )


async def scooters_by_service(request):
    return web.json_response(
        await get_scooters(request.match_info["service"])
    )


app = web.Application()
app.add_routes([web.get('/', index)])

app.add_routes([web.get('/scooters.json', scooters_all)])
app.add_routes([web.get('/scooters-{service}.json', scooters_by_service)])

app.add_routes([web.get('/marker-{type}.svg', marker)])
web.run_app(app, port=5000)
