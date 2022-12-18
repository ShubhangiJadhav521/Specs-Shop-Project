const mongoose = require("mongoose");
const validator = require("validator");

 const cardSchema = mongoose.Schema({
     name: {
         type: String,
         required: true,
         minLength: 3
     },
     card: {
        type: String,
        required: true,
        minLength: 10
     },
     date: {
        type: String,
        required: true,
        minLength: 10
     },
     cvv: {
        type: String,
        required: true,
        minLength: 3
     },
     
 });


 //we need a collection

 const Card = mongoose.model("card",cardSchema);

 module.exports = Card;