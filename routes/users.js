var express = require('express');
var router = express.Router();
var User = require('../models/User');


router.get("/", function(req, res) {
  //User.find({})
  //.sort({username:1})
//  .exec(function(err, users){
  //  if(err) return res.json(err);
    res.render("users/login");

//  });
});

router.post("/login", function(req, res){
  //User.create({username:req.body.inputID, password:req.body.inputPassword}, function(err, user){
    //if(err) return res.json(err);
//  });
    User.findOne({username:req.body.inputID},function(err,user){
      if(err) return res.json(err);
      if(req.body.inputID === user.username){
        return hasher({password:pwd, salt:user.salt}, function(err, pass, salt, hash){
          if(hash === user.password){
            res.send("success");
          }
        });
      }
      else {
        res.send("fail");
      }
    });
  });
  //User.find({})
  //  .where('password').equals(req.body.inputPassword).exec(function(err,user){
  //    res.render("board");
//    });


module.exports = router;
