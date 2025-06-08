const express = require('express');
const router = express.Router();

const db = require('../server').db; //.db on undefiend, pitää jotain muuta keksiä

router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, res) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(res);
    });
});

module.exports = router;