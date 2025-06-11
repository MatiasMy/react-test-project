const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "tester",
    password: "tester123",
    database: "react_test_project"
})

module.exports = db;