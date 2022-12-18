const mongoose = require("mongoose");


 const userSchema = mongoose.Schema({
     
    price:{
        type : Number,
    }
 });


 //we need a collection

 const sub = mongoose.model("image",userSchema);

 module.exports = sub;