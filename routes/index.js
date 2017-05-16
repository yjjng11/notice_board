var express = require('express');
var router = express.Router();
var BoardContents = require('../models/Post');

router.get('/', function(req,res){
  res.render("board");
});

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

module.exports = router;
