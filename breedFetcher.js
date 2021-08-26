const request = require("request");
const breed = process.argv.slice(2);
if (breed[0].length === 0) {
  console.log("Enter a breed name as an argument");
  process.exit();
}
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, response, body) => {
    //console.log(response.statusCode);
    const BreedObject = JSON.parse(body);
    console.log(BreedObject[0].description);
    if (BreedObject.length === 0) {
      console.log(`The ${breed} not found`);
    }
    if (error) {
      console.log("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response
    }
  }
);
