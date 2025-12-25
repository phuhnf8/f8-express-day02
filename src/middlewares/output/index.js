const formatOutput = (app) => {
    app.use((req, res, next) => {
        // Response with message
        res.ok = (msg, status = 200) => {
            return res.status(status).send({
                status: 'success',
                message: msg,
            });
        };

        // View result

        res.out = (data, status = 200) => {
            return res.status(status).send({
                status: 'success',
                data,
            });
        };

        // Error format
        res.err = (msg, status = 400) => {
            return res.status(status).send({
                status: 'error',
                message: msg,
            });
        };

        // Not found an item?
        res.notFound = (msg, item) => {
            return res.status(404).send({
                status: 'error',
                message: msg,
                item,
            });
        };
        return next();
    });
};
module.exports = formatOutput;
