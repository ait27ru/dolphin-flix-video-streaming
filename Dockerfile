FROM node:21.7.1

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY ./src ./src
COPY ./videos ./videos

CMD [ "npm", "start" ]