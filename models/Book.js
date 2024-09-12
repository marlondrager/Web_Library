const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        unique: true,
        required: true,
        type: String,
    },
    author: {
        required: true,
        type: String,
    },
    quantity: {
        type: Number,
        required: true,
    },
    description: {
        required: true,
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;