const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const cities = require('../helpers/cities');
const { searchCities } = require('../helpers/searchCities');

app.use('/', express.static(path.join(__dirname, './../client/dist')));

app.get('/suggestions', (req, res) => {
  res.send(searchCities(req.query, cities));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
