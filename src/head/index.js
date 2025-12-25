// Configure all details for headers
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const CORS_OPTIONS = require('./CORS_OPTIONS');

const importHeaders = (app) => {
    // CORS
    app.use(cors(CORS_OPTIONS));

    // Helmet
    app.use(helmet());

    // Static path
    app.use('/static', express.static('static'));
    app.use(express.json());
};

module.exports = importHeaders;
