from scooters.bolt import auth
import asyncio


async def auth_test():
    data = await auth.login()
    print(data)


if __name__ == '__main__':
    asyncio.run(auth_test())
