const mongoose = require("mongoose");
const validator = require("validator");

 const userSchema = mongoose.Schema({
     price: {
         type: Number,
         required: true
     },
    
 });

 //we need a collection

 const User = mongoose.model("image",userSchema);

 module.exports = User;