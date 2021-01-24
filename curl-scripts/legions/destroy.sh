curl "http://localhost:4741/legion/${ID}" \
--include \
--request DELETE \
--header "Authorization: Bearer ${TOKEN}"

echo
