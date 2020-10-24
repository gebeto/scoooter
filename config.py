def read_credentials(name):
    try:
        return open(f".credentials-{name}", "r").read()
    except FileNotFoundError:
        return None


def write_credentials(name, data):
    open(f".credentials-{name}", "w").write(data)
