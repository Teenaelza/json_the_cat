const request = require("request");
const fetchBreedDescription = function(breed, callback) {
  request(
    `https://api.thectapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      callback(error, body);
    }
  );
};
module.exports = { fetchBreedDescription };
