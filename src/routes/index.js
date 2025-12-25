const formatOutput = require('@/middlewares/output');
const handleErrors = require('@/middlewares/errors');
const apiRoute = require('@routes/api.route');
const useRoute = (app) => {
    // Added output format
    formatOutput(app);

    app.get('/', (req, res, next) => {
        res.ok('Welcome to the API');
    });

    app.use('/api', apiRoute);

    // Error handling
    handleErrors(app);
};

module.exports = useRoute;
