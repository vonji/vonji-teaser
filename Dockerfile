FROM node:6.3

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN NODE_ENV=production npm install

CMD ["npm start"]

EXPOSE 8081
