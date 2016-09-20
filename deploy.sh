#!/bin/bash
PORT=22
USER=lpeluso
HOST=vonji.fr
DIR=vjtz-stg

npm install
npm run build -- --release

ssh -p $PORT $USER@$HOST <<ENDSSH
  rm -fr ${DIR}
  mkdir -p ${DIR}/build && mkdir -p ${DIR}/tools
ENDSSH

scp -P $PORT -r ./build $USER@$HOST:~/$DIR/
scp -P $PORT -r ./tools/server.prod.js $USER@$HOST:~/$DIR/tools/
scp -P $PORT Dockerfile $USER@$HOST:~/$DIR/
scp -P $PORT package.json $USER@$HOST:~/$DIR/

ssh -p $PORT $USER@$HOST <<ENDSSH
  docker-compose up -d --build teaser-staging
ENDSSH
