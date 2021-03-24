FROM node:12-alpine

WORKDIR /app

RUN mkdir -p /assets/images

COPY package*.json ./

RUN npm i

COPY ./ ./

EXPOSE 3000

CMD [ "npm", "run", "prod" ]