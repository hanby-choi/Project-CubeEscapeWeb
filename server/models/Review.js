const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema({
   writer : { 
    type : String,
    required : true
   },
  
   content : {
       type : String,
       required : true
   },
   ratings : {
       type: Number,
       required : true
   }
})



const Review = mongoose.model('Review', reviewSchema);

module.exports = { Review}