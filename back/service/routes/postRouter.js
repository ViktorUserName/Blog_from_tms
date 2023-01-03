const express = require('express')
const postController = require('../modules/post/controllers/postController');
const postRouter = express.Router();


postRouter.get('/', postController.getPost);
postRouter.get('/:id', postController.getPostByName);
postRouter.put('/:id/like', postController.putLike)
postRouter.put('/:id/dislike', postController.putDislike)




module.exports = postRouter;