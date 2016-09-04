FROM node:6.3

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY . /usr/src/app

CMD ["node ./server/app.js"]

EXPOSE 8081
