FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=9000

RUN npm run build; rm --recursive node_modules/

EXPOSE ${PORT}

CMD [ "http-server", "docs/.vitepress/dist" ]
