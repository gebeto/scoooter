# scoooter
Scooter sharing aggregator web app. Lviv, Ukraine.

[![Heroku Deploy](https://github.com/gebeto/scoooter/actions/workflows/heroku.yml/badge.svg)](https://github.com/gebeto/scoooter/actions/workflows/heroku.yml)


## Start dev server

Create venv:
```sh
python3 -m venv venv
source venv/bin/activate
```

Export all credentials to env
```sh
source ./scripts/export-credentials
```

Start server:
```sh
python backend/server.py
```
