FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /product-docs

COPY package*.json ./

RUN npm install

COPY docs .

RUN npm run build

ENV PORT=9000
EXPOSE ${PORT}

CMD [ "npm", "run", "server", "--", "--port", "9000"]
