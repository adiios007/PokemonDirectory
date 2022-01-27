var createError = require('http-errors');
var express = require('express');
var path = require('path');
var indexRouter = require('./routes/index');
var listRouter = require('./routes/pokemonlist');
var legendaryRouter = require('./routes/legendary');
var app = express();

// view engine setup
//app.use('/', indexRouter);
app.use('/', listRouter);
app.use('/legendary', legendaryRouter);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3000, () => console.log('Server running on port 3000!'));

module.exports = app;