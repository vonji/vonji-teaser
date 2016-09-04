#!/bin/bash
PORT=3485
DIR=vj-tz-stg

ssh -p $PORT loup@vonji.fr <<ENDSSH
  mkdir -p ${DIR}
  rm -fr ${DIR}/dist && rm -fr ${DIST}/server
ENDSSH

scp -P $PORT -r ./dist loup@vonji.fr:~/$DIR/
scp -P $PORT -r ./server loup@vonji.fr:~/$DIR/
scp -P $PORT Dockerfile loup@vonji.fr:~/$DIR/

ssh -p $PORT loup@vonji.fr <<ENDSSH
  cd $DIR && npm install express && cd ..
  docker-compose up -d --build teaser-staging
ENDSSH
