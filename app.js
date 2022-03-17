var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');

var app = express();

app.use(function (request, response, next) {
  console.log('Custom middleware');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// Step 2 (part of the URL is registered here, the rest in routes/books)
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);

module.exports = app;
