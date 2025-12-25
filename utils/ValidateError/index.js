class ValidateError extends Error {
    constructor(msg, item) {
        super(msg);
        this.item = item;
    }
}
module.exports = ValidateError;
