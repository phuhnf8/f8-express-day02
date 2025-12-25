const NotFoundError = require('@utils/NotFoundError');

const handleErrors = (app) => {
    app.use((req, res) => {
        return res.err('Not Found', 404);
    });
    app.use((err, req, res, next) => {
        if (err instanceof NotFoundError) {
            return res.notFound(err.message);
        }
        console.error(err);
        return res.err('Unexpected error', 500);
    });
};

module.exports = handleErrors;
