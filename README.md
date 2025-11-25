# kideo-assignment

BE (backend) 

technoligies used typescript, node js, express js and mysql2.

under the be dir you will find sqlinit.sql file that containse the needed tables in the database you can copy them and you can start directly
after cloning make sure that you are in the be dirictory and then run these commands

npm i
npm start 

please check the curls that can be imported to post man to test it
curl --location 'localhost:8081/contact'

curl --location 'localhost:8081/contact' \
--header 'Content-Type: application/json' \
--data '{
    "email":"test",
    "message":"test",
    "name":"test"
}'
