const DB_NAME = 'posts';
const { loadDB, saveDB } = require('@utils/jsonDB');
const NotFoundError = require('@utils/NotFoundError');
const ValidateError = require('@utils/ValidateError');
class PostModel {
    async getList() {
        const data = await loadDB(DB_NAME);
        return data;
    }
    async getOne(id) {
        const data = await loadDB(DB_NAME);
        const post = data.find((item) => item.id === parseInt(id));
        if (!id) throw new NotFoundError('Post ID is required');
        if (!post) throw new NotFoundError('Post not found');
        return post;
    }

    async create({ title, content }) {
        if (!title || !content) {
            throw new ValidateError('Title and content are required');
        }
        const data = await loadDB(DB_NAME);
        const largestID = Math.max(0, ...data.map((item) => item.id));
        const newPost = {
            id: largestID + 1,
            title,
            content,
            createdAt: new Date().toISOString(),
        };
        data.push(newPost);
        await saveDB(DB_NAME, data);
        return newPost;
    }

    async update(id, { title, content }) {
        if (!id || (!title && !content)) {
            throw new ValidateError('ID, title and content are required');
        }

        const data = await loadDB(DB_NAME);
        const postIndex = data.findIndex((item) => item.id === parseInt(id));
        if (postIndex === -1) {
            throw new NotFoundError('Post not found');
        }
        data[postIndex] = {
            ...data[postIndex],
            title: title || data[postIndex].title,
            content: content || data[postIndex].content,
        };
        await saveDB(DB_NAME, data);
        return data[postIndex];
    }

    async delete(id) {
        if (!id) {
            throw new ValidateError('ID is required');
        }
        const data = await loadDB(DB_NAME);
        const postIndex = data.findIndex((item) => item.id === parseInt(id));
        if (postIndex === -1) {
            throw new NotFoundError('Post not found');
        }
        const deletedPost = data.splice(postIndex, 1)[0];
        await saveDB(DB_NAME, data);
        return deletedPost;
    }
}

module.exports = new PostModel();
