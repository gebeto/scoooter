import os
import sys


no_file_credentials = "no-files" in sys.argv


def credentials_from_env(name):
    return os.environ.get(f"CREDENTIALS_{name.upper()}")


def read_credentials(name):
    env_credentials = credentials_from_env(name)
    if env_credentials:
        return env_credentials
    if no_file_credentials:
        raise Exception(f"Environment variable is required: CREDENTIALS_{name.upper()}")
    try:
        return open(f".credentials-{name}", "r").read().strip()
    except FileNotFoundError:
        return None


def write_credentials(name, data):
    open(f".credentials-{name}", "w").write(data)
