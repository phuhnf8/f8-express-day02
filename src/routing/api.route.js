const { Router } = require('express');
const postsRoute = require('./posts.route');
const commentsRoute = require('./comments.route');
const apiRoute = Router();

apiRoute.use('/posts', postsRoute);
apiRoute.use('/comments', commentsRoute);
module.exports = apiRoute;
