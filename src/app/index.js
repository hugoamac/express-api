const hello = require('../hello');
const express = require('express');

const app = express();

app.use('', hello);

module.exports = app;