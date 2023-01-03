const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const postSchema = new Schema ({
    id: Number,
    name: String,
    mainText: String,
    date: String,
    like: Number,
    comments: Array
});

module.exports = mongoose.model('Post', postSchema)
