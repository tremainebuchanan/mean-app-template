'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
// Removing the index reference from the absolute 
// path of the router index file
const routes = require('./api/');

require('./loaders/');

app.use(cors());
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', routes);

module.exports = app;


module.exports = app;
