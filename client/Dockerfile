FROM node:lts-alpine

WORKDIR /app

COPY *.json ./

RUN npm install

COPY src src

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]