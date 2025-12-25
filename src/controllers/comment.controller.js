const commentModel = require('@/models/comment.model');

class CommentController {
    // GET /api/comments
    async viewAllComment(req, res, next) {
        const data = await commentModel.getList();
        return res.out(data);
    }

    // GET /api/comments/:id
    async viewComment(req, res, next) {
        const data = await commentModel.getOne(req.params.id);
        return res.out(data);
    }

    // POST /api/comments
    async createComment(req, res, next) {
        const { postId, content } = req.body;
        const newComment = await commentModel.create({ postId, content });
        return res.out(newComment, 201);
    }

    // PUT /api/comments/:id
    async updateComment(req, res, next) {
        const { content } = req.body;
        const data = await commentModel.update(req.params.id, { content });
        return res.out(data);
    }

    // DELETE /api/comments/:id
    async deleteComment(req, res, next) {
        await commentModel.delete(req.params.id);
        return res.ok(null, 204);
    }
}

module.exports = new CommentController();
