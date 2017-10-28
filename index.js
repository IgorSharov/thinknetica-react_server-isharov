require('babel-register');

const result = require('./render.js').default;

const express = require('express');
const application = express();

application.get('/', function(req, res) {
  res.send(result);
});

application.listen(3005);
