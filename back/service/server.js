const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require('cors')
const postRouter = require('./routes/postRouter')
const postController = require ('./modules/post/controllers/postController')

const app = express();
let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(express.json());
app.use(cors(corsOptions));

app.use('/api/post', postRouter)
app.get('/api/post/:id', postController.getPostByName)



app.use((request, response, next) => {
    response.status(404).send('This page is not found');
});

mongoose.connect('mongodb://0.0.0.0:27017/tms-blog', { useUnifiedTopology: true}, function(error){
    if(error) return console.log(error);
    app.listen(3001);
});