const formatOutput = require('@/middlewares/output');
const handleErrors = require('@/middlewares/errors');
const NotFoundError = require('@/utils/NotFoundError');

const useRoute = (app) => {
    // Added output format
    formatOutput(app);

    app.get('/', (req, res, next) => {
        res.ok('Welcome to the API');
    });

    // Error handling
    handleErrors(app);
};

module.exports = useRoute;
