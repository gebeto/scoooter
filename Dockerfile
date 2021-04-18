FROM node:12-alpine as frontend
WORKDIR /app
COPY ./frontend/yarn.lock yarn.lock
COPY ./frontend/package.json package.json
RUN yarn install --production
COPY ./frontend .
RUN yarn build


FROM python:3.9
WORKDIR /app
COPY ./backend /app
RUN pip install -r requirements.txt
COPY --from=frontend /app/build frontend/build
CMD python server.py
