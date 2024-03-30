const express = require('express');
const router = express.Router();
const Music = require('../models/Music');

// Delete music
router.post('/delete/:id', (req, res) => {
    const musicId = req.params.id;
    Music.findByIdAndDelete(musicId, (err) => {
        if (err) {
            console.error('Error deleting music:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;
