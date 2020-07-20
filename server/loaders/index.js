const db = require('./mongo');
const redisClient = require('./redis');
//const app = require('./express');

db.connection.on('connected', () => {
    console.log('Mongoose connected');
});
  
db.connection.on('error', (err) => {
    console.log('An error occurred while connecting to database', err);
    //app must handle error gracefully
    //to be logged to something!
});

redisClient.on('connect', () => {
    console.log('Connected to redis server');
});
  
redisClient.on('error', (err) => {
    console.log('Error while connecting to redis server', err);
});

//module.exports = app;