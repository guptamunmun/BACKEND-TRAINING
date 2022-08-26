const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_id : Number,
    author_name: String,
    age: Number,
    address: String

}, { timgit s: true });

module.exports = mongoose.model('Author', authorSchema)
