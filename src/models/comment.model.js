const DB_NAME = 'comments';
const { loadDB, saveDB } = require('@utils/jsonDB');
const NotFoundError = require('@utils/NotFoundError');
const ValidateError = require('@utils/ValidateError');
class CommentModel {
    async getList() {
        const data = await loadDB(DB_NAME);
        return data;
    }
    async getOne(id) {
        const data = await loadDB(DB_NAME);
        const comment = data.find((item) => item.id === parseInt(id));
        if (!id) throw new NotFoundError('Comment ID is required');
        if (!comment) throw new NotFoundError('Comment not found');
        return comment;
    }

    async create({ postId, content }) {
        if (!postId || !content) {
            throw new ValidateError('PostId and content are required');
        }
        const data = await loadDB(DB_NAME);
        const largestID = Math.max(0, ...data.map((item) => item.id));
        const newComment = {
            id: largestID + 1,
            postId: parseInt(postId),
            content,
            createdAt: new Date().toISOString(),
        };
        data.push(newComment);
        await saveDB(DB_NAME, data);
        return newComment;
    }

    async update(id, { content }) {
        if (!id || !content) {
            throw new ValidateError('ID and content are required');
        }

        const data = await loadDB(DB_NAME);
        const commentIndex = data.findIndex((item) => item.id === parseInt(id));
        if (commentIndex === -1) {
            throw new NotFoundError('Comment not found');
        }
        data[commentIndex] = {
            ...data[commentIndex],
            content: content || data[commentIndex].content,
        };
        await saveDB(DB_NAME, data);
        return data[commentIndex];
    }

    async delete(id) {
        if (!id) {
            throw new ValidateError('ID is required');
        }
        const data = await loadDB(DB_NAME);
        const commentIndex = data.findIndex((item) => item.id === parseInt(id));
        if (commentIndex === -1) {
            throw new NotFoundError('Comment not found');
        }
        const deletedComment = data.splice(commentIndex, 1)[0];
        await saveDB(DB_NAME, data);
        return deletedComment;
    }
}

module.exports = new CommentModel();
