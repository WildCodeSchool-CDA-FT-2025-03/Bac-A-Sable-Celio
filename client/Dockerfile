FROM node:lts-alpine AS runner

WORKDIR /app

COPY *.json ./

RUN npm install

COPY src src

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "preview"]