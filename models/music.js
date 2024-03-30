const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicSchema = new Schema({
    title: String,
    artist: String,
    duration: Number,
    file: {
        originalname: String,
        filename: String
    }
});

module.exports = mongoose.model('Music', musicSchema);
