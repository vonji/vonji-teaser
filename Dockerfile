FROM node:6.3

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install
RUN npm run build -- --release

CMD ["npm run server -- --release"]

EXPOSE 8081
