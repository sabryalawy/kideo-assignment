# Kideo Assignment

## Overview
This project consists of a frontend (React) and a backend (Node.js/TypeScript). The goal is to implement a UI based on the provided Figma design and deliver backend APIs connected to MySQL.

---

## System Requirements
- **Node.js:** v16.17.0
- **NPM:** v8.15.0

---

## Frontend (FE)
- **Technology:** React JS v19
- The UI is adapted from a Figma design.

### Quick Installation
```
cd fe
npm install
npm start
```
The application will start on the default React development server port.

---

## Backend (BE)
- **Technologies:** TypeScript, Node.js, Express.js, MySQL2

### Database Initialization
Inside the `be` directory, there is a file named `sqlinit.sql` containing all required database tables. Copy its content into your MySQL environment to initialize the database.

### Quick Installation
```
cd be
npm install
npm start
```
The backend server will run on port **8081**.

---

## API Testing
Below are sample cURL commands that can be imported into Postman.

### GET Contact
```
curl --location 'localhost:8081/contact'
```

### POST Contact
```
curl --location 'localhost:8081/contact' \
--header 'Content-Type: application/json' \
--data '{
    "email":"test",
    "message":"test",
    "name":"test"
}'
```

