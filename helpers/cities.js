const fs = require('fs');
const d3 = require('d3-dsv');

const cityString = fs.readFileSync('./data/cities_canada-usa.tsv').toString();
const cityObj = d3.tsvParse(cityString);

module.exports = cityObj;
