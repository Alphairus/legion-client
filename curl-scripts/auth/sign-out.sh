#!/bin/bash

API="http://localhost:4741"
URL_PATH="/sign-out"

curl "http://localhost:4741/sign-out" \
--include \
--request DELETE \
--header "Authorization: Bearer ${TOKEN}"

echo
