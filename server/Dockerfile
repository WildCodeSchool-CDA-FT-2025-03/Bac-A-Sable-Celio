FROM node:lts-alpine as api

WORKDIR /app

COPY *.json ./

RUN npm install

COPY src src

COPY data data

EXPOSE 3000

CMD ["npm", "run", "start"]