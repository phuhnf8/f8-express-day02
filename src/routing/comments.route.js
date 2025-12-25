const { Router } = require('express');
const commentsRoute = Router();
const CommentController = require('@controllers/comment.controller');

commentsRoute.get('/', CommentController.viewAllComment);
commentsRoute.get('/:id', CommentController.viewComment);

commentsRoute.post('/', CommentController.createComment);
commentsRoute.put('/:id', CommentController.updateComment);
commentsRoute.delete('/:id', CommentController.deleteComment);
module.exports = commentsRoute;
