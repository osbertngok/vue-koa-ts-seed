#!/usr/bin/env bash

CURR_FILE_DIR=`dirname $0`
PROJECT_DIR=${CURR_FILE_DIR}/../
PROJECT_NAME=vue_koa_ts_seed
COMMIT_SHA=`git rev-parse --verify HEAD`
COMMIT_SHA_SHORT=${COMMIT_SHA:0:8}
DOCKER_IMAGE_NAME=${PROJECT_NAME}-${COMMIT_SHA_SHORT}

cd ${PROJECT_DIR}

yarn cache clean && rm -rf node_modules/ && yarn
yarn run build
docker build -t $DOCKER_IMAGE_NAME -f docker/DockerFile .
