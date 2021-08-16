#!/bin/bash

set -e

SCRIPT_PATH="$(dirname "$(readlink -f $0)")"
. "${SCRIPT_PATH}/dockerenv"

docker-compose build
docker-compose run --rm runner "$@"
