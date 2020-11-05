import os


def credentials_from_env(name):
    return os.environ.get(f"CREDENTIALS_{name.upper()}")


def read_credentials(name):
    env_credentials = credentials_from_env(name)
    if env_credentials:
        return env_credentials
    try:
        return open(f".credentials-{name}", "r").read()
    except FileNotFoundError:
        return None


def write_credentials(name, data):
    open(f".credentials-{name}", "w").write(data)
