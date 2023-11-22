#!/usr/bin/env bash
# exit on error
set -o errexit

nvm install 16 && nvm use 16

yarn
yarn build
yarn typeorm migration:run -d dist/data-source