FROM node:14.17.5 as build

WORKDIR /app

COPY pakage.json .
RUN npm install
COPY . .
RUN npm run build