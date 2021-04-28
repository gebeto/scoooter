import os
from enum import Enum
from typing import Optional, List, Union

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel

from main import get_scooters


app = FastAPI()


class ServiceName(str, Enum):
    ewings = "ewings"
    kiwi = "kiwi"
    bolt = "bolt"


class LatLon(BaseModel):
    lat: float
    lon: float


class Scooter(BaseModel):
    service: ServiceName
    type: str
    id: Union[int, str]
    title: str
    battery: int
    location: LatLon


@app.get("/", include_in_schema=False)
async def index():
    return FileResponse("frontend/build/index.html")


@app.get("/scooters.json", response_model=List[Scooter])
async def scooters_all():
    return await get_scooters("all")


@app.get("/scooters-{service}.json", response_model=List[Scooter])
async def scooters_by_service(service: ServiceName):
    return await get_scooters(service)


if os.path.exists('frontend/build'):
    app.mount("/", StaticFiles(directory="frontend/build"), name="static")
