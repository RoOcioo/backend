var request = require("request");

request.get('http://localhost:8002/countries', function(req, res, body) {

const countries= JSON.parse(body);
var countriesReverse = countries.reverse();
console.log(countriesReverse)
});

