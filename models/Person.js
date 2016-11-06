const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    id: Number,
    email: String,
    name: String,
    seatId: {
        type: Number,
        default: null
    }
}, { timestamps: true });

const Doc = mongoose.model('Person', docSchema);
module.exports = Doc;
