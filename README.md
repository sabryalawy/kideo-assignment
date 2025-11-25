# kideo-assignment

curl --location 'localhost:8081/contact'

curl --location 'localhost:8081/contact' \
--header 'Content-Type: application/json' \
--data '{
    "email":"test",
    "message":"test",
    "name":"test"
}'
