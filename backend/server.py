import os
from aiohttp import web
from main import get_scooters


async def index(request):
    return web.FileResponse("frontend/dist/index.html")


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

app.add_routes([web.static('/', 'frontend/dist')])
web.run_app(app, port=os.environ.get("PORT", 5000))
