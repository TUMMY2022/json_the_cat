const request = require('request');
const fetchBreedDetails = function (catbreed, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${catbreed}`;
  request(url, function (err, response, body) {    
    if (err) {
      callback(err)
    } 
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
    let breed = data[0];
    if (breed) {
      callback(null, breed.description)
    } else {
      callback("breed not found")
    }
  });
};
