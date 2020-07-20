require('dotenv').config();

module.exports = {
  mongo: {
    uri: process.env.MONGODB_URI,
    options: {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
  },
  redis: {
    password: process.env.REDIS_PASS
  }
};