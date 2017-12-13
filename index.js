const express = require('express'); 
const application = express();

const cors = require('cors');

const items = require('./data');

application.use(cors());

application.get('/', function(req, res) {
  res.json(items);
});

application.listen(3001, () => {
  console.log('Server on 3001');
});
