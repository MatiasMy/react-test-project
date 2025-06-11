const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json());

var loginRouter = require("./routes/loginRouter");

app.use("/login", loginRouter);

app.get("/", (req, res) => {
    return res.json({ message: "Hello from the backend!" });
})

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});
