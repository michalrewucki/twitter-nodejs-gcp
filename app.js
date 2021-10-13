const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorHandler = require('./error-handler/error-handler');

const twitterRoutes = require('./modules/twitter/routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(twitterRoutes);
app.use(errorHandler)

module.exports = app;
