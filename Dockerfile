FROM node:6.3

RUN mkdir -p /usr/src/vonji-teaser
WORKDIR /usr/src/vonji-teaser

COPY package.json /usr/src/vonji-teaser/
RUN npm install

COPY . /usr/src/vonji-teaser

EXPOSE 8080
