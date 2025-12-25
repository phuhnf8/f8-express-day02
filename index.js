require('module-alias/register');
const express = require('express');
const useRoute = require('@routing/index.js');
const app = express();
const PORT = 3000;

app.use('/static', express.static('static'));
app.use(express.json());

useRoute(app);

app.listen(PORT, () => {
  console.log('Server backend is running in port', PORT);
});
