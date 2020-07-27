'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const winston = require('./configs/winston');
const app = express();
// Removing the index reference from the absolute 
// path of the router index file
require('./loaders/');
app.use(helmet());
app.use(morgan('combined', { stream: winston.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
const routes = require('./api/');
app.use('/', routes);
module.exports = app;
