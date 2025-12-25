const postModel = require('@/models/post.model');

class PostController {
    // GET /api/posts
    async viewAllPost(req, res, next) {
        const data = await postModel.getList();
        return res.out(data);
    }

    // GET /api/posts/:id
    async viewPost(req, res, next) {
        const data = await postModel.getOne(req.params.id);
        return res.out(data);
    }

    // POST /api/posts
    async createPost(req, res, next) {
        const { title, content } = req.body;
        const newPost = await postModel.create({ title, content });
        return res.out(newPost, 201);
    }

    // PUT /api/posts/:id
    async updatePost(req, res, next) {
        const { title, content } = req.body;
        const data = await postModel.update(req.params.id, { title, content });
        return res.out(data);
    }

    // DELETE /api/posts/:id
    async deletePost(req, res, next) {
        await postModel.delete(req.params.id);
        return res.ok(null, 204);
    }
}

module.exports = new PostController();
