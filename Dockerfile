FROM node:12-alpine

WORKDIR /app

RUN mkdir -p /assets/images

RUN chown -R node:node /app

USER node

COPY --chown=node:node package*.json ./

RUN npm i

COPY --chown=node:node ./ ./

EXPOSE 3000

CMD [ "npm", "run", "prod" ]