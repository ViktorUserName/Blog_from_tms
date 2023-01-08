const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const postSchema = new Schema ({
    id: String,
    name: String,
    mainText: String,
    date: String,
    like: Number,
    dislike: Number,
    comments: Array,
    img: String
});

module.exports = mongoose.model('Post', postSchema)
