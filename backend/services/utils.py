import asyncio
import aiohttp


async def get_json(url, headers=None, **kwargs):
    async with aiohttp.ClientSession(headers=headers) as session:
        async with session.get(url, **kwargs) as r:
            return await r.json()


async def post_json(url, headers=None, **kwargs):
    async with aiohttp.ClientSession(headers=headers) as session:
        async with session.post(url, **kwargs) as r:
            return await r.json()


async def tttt(title):
    print(f"START: {title}")
    res = await post_json("https://httpbin.org/", headers={"A": "1"}, json={"A": 123}),
    print(f"END: {title}")
    return res


async def main():
    json_response = await post_json("https://httpbin.org/", headers={"A": "1"}, json={"A": 123})
    data = await asyncio.gather(
        tttt("A"),
        tttt("B"),
        tttt("C"),
    )
    print(data)

# asyncio.run(main())
