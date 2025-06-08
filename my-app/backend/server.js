const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express()
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react_test_project"
})

app.get("/", (req, res) => {
    return res.json({ message: "Hello from the backend!" });
})

app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" });
        }
        return res.json(results);
    });
});

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});