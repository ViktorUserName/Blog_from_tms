const express = require('express')
const postController = require('../modules/post/controllers/postController');
const postRouter = express.Router();


postRouter.get('/', postController.getPost);


module.exports = postRouter;