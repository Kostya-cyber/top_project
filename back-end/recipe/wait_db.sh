#!/bin/bash

set -e

host="conteiner_a"
port="8000"
cmd="$@"

until [ curl jdbc:postgresql://db_recipes:5432/recipes ]; do
  sleep 1
done

exec cmd