class NotFoundError extends Error {
    constructor(msg, item) {
        super(msg);
        this.item = item;
    }
    text() {
        return `${this.item} not found`;
    }
}
module.exports = NotFoundError;
