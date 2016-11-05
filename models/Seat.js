const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    left : Number,
    top : Number,
    title: String,
    occupant: String,
    id: Number
}, { timestamps: true });

const Doc = mongoose.model('Seat', docSchema);
module.exports = Doc;
