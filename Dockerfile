FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY docs/.vitepress/dist .

ENV PORT=9000
EXPOSE ${PORT}

CMD [ "http-server", "."]
