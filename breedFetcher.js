const request = require("request");
const fetchBreedDescription = function(breed, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    (error, response, body) => {
      const BreedObject = JSON.parse(body);
      let desc = "";
      if (BreedObject.length > 0) {
        desc = BreedObject[0].description;
      } else {
        desc = "The Breed not found";
      }
      callback(error, desc);
    }
  );
};
module.exports = { fetchBreedDescription };
