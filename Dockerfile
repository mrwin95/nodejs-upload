FROM node:12-alpine

WORKDIR /app

#RUN mkdir -p /assets/images

RUN chown -R node:node /app

USER node

COPY --chown=node:node package*.json ./

#RUN ls -al

RUN npm i

COPY --chown=node:node ./ ./

#VOLUME ["/assets/images"]

# VOLUME [ "/shareimages" ]

#RUN ls -al

#RUN pwd

#RUN cd /assets/images && ls -al

EXPOSE 3000

CMD [ "npm", "run", "prod" ]