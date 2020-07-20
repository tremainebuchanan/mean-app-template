const mongoose = require('mongoose');
const configs = require('../configs/config');

mongoose.Promise = global.Promise;

mongoose.connect(configs.mongo.uri, configs.mongo.options);

module.exports = mongoose;