const CORS_OPTIONS = {
    origin: ['http://localhost:5173', 'https://phuhnf8.github.io'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    preflightContinue: true,
    optionsSuccessStatus: 200,
};
module.exports = CORS_OPTIONS;
