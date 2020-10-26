var request = require('request');

const apiKey = process.env.ZIPCODE_API_KEY;
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

var distance = {
    find: function(req, res, next) {
        request(zipCodeURL + apiKey + '/distance.json/' +
        req.params.zipcode1 + '/' + req.params.zipcode2,
        function(error, response, body){
            console.log(body);
            if(!error && response.statusCode == 200){
                response = JSON.parse(body);
                res.send(response);
            }else if(!error && response.statusCode == 429){            
                res.send({msg: 'api daily request limit reached'});
            }else {
                console.log(response.statusCode + response.body);
                res.send(JSON.parse(body));
            }
        });
    }
};

module.exports = distance;