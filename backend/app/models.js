const redisClient = require ('../config/redis');

exports.saveCallid = (key,value) => {
    return new Promise((resolve,reject) => {
        redisClient.SET(key, JSON.stringify(value), "EX",86400,(err,res) => {
            if(err){
                reject(err);
            }
            resolve(res);
        })
    })
}

exports.getCallid = (key) => {
    return new Promise((resolve,reject) => {
        redisClient.GET(key, (err,res) => {
            if(err){
                reject(err);
            }
            resolve(JSON.parse(res));
        })
    })
}