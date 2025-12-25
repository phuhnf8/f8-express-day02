const { Router } = require('express');
const postsRoute = Router();
const PostController = require('@controllers/post.controller');

postsRoute.get('/', PostController.viewAllPost);
postsRoute.get('/:id', PostController.viewPost);

postsRoute.post('/', PostController.createPost);
postsRoute.put('/:id', PostController.updatePost);
postsRoute.delete('/:id', PostController.deletePost);
module.exports = postsRoute;
