const redis = require('redis');
const configs = require('../configs/config')
const redisClient = redis.createClient({
    password: configs.redis.password
});

module.exports = redisClient;