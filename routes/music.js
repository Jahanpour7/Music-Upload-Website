const express = require('express');
const router = express.Router();
const multer = require('multer');
const Music = require('../models/Music');

// Configure Multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Upload music file
router.post('/upload', upload.single('music'), (req, res) => {
    const { originalname, filename } = req.file;
    const { title, artist, duration } = req.body;

    const newMusic = new Music({
        title,
        artist,
        duration,
        file: {
            originalname,
            filename
        }
    });

    newMusic.save()
        .then(() => res.redirect('/'))
        .catch(err => console.error('Error uploading music:', err));
});

module.exports = router;
