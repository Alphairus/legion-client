
curl "http://localhost:4741/legion/${ID}" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "legion": {
    "title": "'"${TITLE}"'",
    "homeworld": "'"${HOMEWORLD}"'",
    "primarch": "'"${PRIMARCH}"'",
    "loyalty": "'"${LOYALTY}"'",
  }
}'
