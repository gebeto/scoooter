FROM node:10-alpine as frontend
WORKDIR /app
COPY ./frontend /app
RUN npm install
RUN npm run build


FROM python:3.9
WORKDIR /app
COPY ./backend /app
RUN pip install -r requirements.txt
COPY --from=frontend /app/dist frontend/dist
CMD python server.py
