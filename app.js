// Variables used by express
var createError = require('http-errors');
var express = require('express');
var cors = require("cors")
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
// Indicate to use the connection to MongoDB
var MongoDBUtil = require('./modules/mongodb/mongodb.module').MongoDBUtil;
// Define the controllers of the application (Product)
var ProductController = require('./modules/product/product.module')().ProductController;
// Define the controllers of the application (User)
var UserController = require('./modules/user/user.module')().UserController;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Initialize the connection to DataBase
MongoDBUtil.init();
// Give grant connection to frontend
app.use(cors());

// Path to consume the web service and controller process the request (products)
app.use('/products', ProductController);
// Path to consume the web service and controller process the request (users)
app.use('/users', UserController);

app.get('/', function (req, res) {
  var pkg = require(path.join(__dirname, 'package.json'));
  res.json({
    name: pkg.name,
    version: pkg.version,
    status: 'up'
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: res.locals.message,
    error: res.locals.error
  });
});

module.exports = app;
