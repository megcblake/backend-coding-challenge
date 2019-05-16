const { scoreCity } = require('./scoreCity');
const { convertProvince } = require('./convertProvinces');

const searchCities = (query, cities) => ({
  suggestions: cities.map(city => ({
    name: `${city.name}, ${convertProvince(city.admin1)}, ${city.country}`,
    latitude: city.lat,
    longitude: city.long,
    score: scoreCity(query, city),
  }))
    .filter(city => city.score > 0)
    .sort((city1, city2) => city2.score - city1.score),
});

module.exports = { searchCities };
