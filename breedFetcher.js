const request = require("request");
request(
  "https://api.thecatapi.com/v1/breeds/search?q=sib",
  (error, response, body) => {
    console.log(body);
    console.log(typeof body);
  }
);
