FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=9000

RUN npm run build

EXPOSE ${PORT}

CMD [ "http-server", "docs/.vitepress/dist" ]
