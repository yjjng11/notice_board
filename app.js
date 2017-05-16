var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose=require('mongoose');
var methodOverride = require('method-override');
var multer = require("multer");
var fs = require("fs");



mongoose.connect('mongodb://localhost/notice-board');
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
  console.log("DB connected");
});

var index = require('./routes/index');
var users = require('./routes/users');
var files = require('./routes/files');
var posts = require('./routes/posts');
//var boards = require('./routes/contents');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));

app.use('/',users);
//app.use('/users', users);
//app.use('/boards',boards);
app.use('/posts', posts);
app.use('/files', files);
app.use('/users', users);

app.use(express.static('public'));  //정적 파일 추가

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3000,function(){
  console.log("server on!");
})
module.exports = app;
