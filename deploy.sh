#!/bin/bash
PORT=22
USER=lpeluso
HOST=vonji.fr
DIR=vjtz-stg

npm install
npm run build

ssh -p $PORT $USER@$HOST <<ENDSSH
  mkdir -p ${DIR}
  rm -fr ${DIR}/dist && rm -fr ${DIST}/server
ENDSSH

scp -P $PORT -r ./dist $USER@$HOST:~/$DIR/
scp -P $PORT -r ./server $USER@$HOST:~/$DIR/
scp -P $PORT Dockerfile $USER@$HOST:~/$DIR/

ssh -p $PORT $USER@$HOST <<ENDSSH
  echo "Installing express server..."
  cd $DIR && npm install express && cd ..
  docker-compose up -d --build teaser-staging
ENDSSH
