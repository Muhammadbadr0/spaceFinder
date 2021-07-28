const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

/* === MIDDLEWARE === */
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

/* === ROUTES === */

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
