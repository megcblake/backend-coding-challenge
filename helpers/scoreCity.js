const scoreNames = (queryName, cityName) => {
  if (cityName.startsWith(queryName)) {
    return queryName.length / cityName.length;
  }
  return 0;
};

const retrieveDistance = (lat1, lon1, lat2, lon2) => {
  const p = 0.017453292519943295;
  const c = Math.cos;
  const a = 0.5 - c((lat2 - lat1) * p) / 2
            + c(lat1 * p) * c(lat2 * p)
            * (1 - c((lon2 - lon1) * p)) / 2;
  return 12742 * Math.asin(Math.sqrt(a));
};

const scoreDistance = (query, city) => {
  const distance = retrieveDistance(query.latitude, query.longitude, city.lat, city.long);
  const maxDistance = 1000;
  const distanceScore = 1 - (distance / maxDistance);
  return distanceScore;
};

const scoreCity = (query, city) => {
  const nameScore = scoreNames(query.q, city.name);
  if (query.latitude && query.longitude && city.lat && city.long && nameScore > 0) {
    const locationScore = scoreDistance(query, city);
    const aggregate = (nameScore + locationScore) / 2;
    return aggregate.toFixed(1);
  }
  return nameScore.toFixed(1);
};

module.exports = { scoreCity };
