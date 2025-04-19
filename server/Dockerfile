FROM node:lts-alpine AS prod

WORKDIR /app

COPY *.json ./

RUN npm install

COPY src src

COPY data data

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "prod"]