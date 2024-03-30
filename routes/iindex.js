const express = require('express');
const router = express.Router();
const Music = require('../models/Music');

router.get('/', (req, res) => {
    Music.find({}, (err, music) => {
        if (err) {
            console.error('Error fetching music:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.render('index', { music });
        }
    });
});

module.exports = router;
