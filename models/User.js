var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  username:{type:String, required:[true, "Username is required!"], unique:true},
  password:{type:String, required:[true, "Password is required!"], select:false}
},{
  toObject:{virtuals:true}
});

var User = mongoose.model("user",userSchema);
module.exports=User;
