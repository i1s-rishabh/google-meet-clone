let redis = require('redis');
let client = redis.createClient();

client.on_connect('error', (error) => {
    console.log(error);
});

module.exports = client;