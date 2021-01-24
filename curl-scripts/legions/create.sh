curl "http://localhost:4741/legion" \
  --include \
  --request POST \
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
