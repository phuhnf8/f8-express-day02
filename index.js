require('module-alias/register');
const express = require('express');
const app = express();

const useRoute = require('@routing/index.js');
const importHeaders = require('@head');

const PORT = 3000;

importHeaders(app);
useRoute(app);

app.listen(PORT, () => {
    console.log('Server backend is running in port', PORT);
});
