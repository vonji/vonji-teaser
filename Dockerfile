FROM node:6.3

RUN mkdir -p /usr/src/vonji-teaser
WORKDIR /usr/src/vonji-teaser

COPY package.json /usr/src/vonji-teaser/
RUN NODE_ENV='production' npm install && npm run build

COPY . /usr/src/vonji-teaser

EXPOSE 8080
