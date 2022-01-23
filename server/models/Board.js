const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = mongoose.Schema({
    type: { // 자유 or 공략 or 아이디어
        type : String,
        required : true
    },
   writer : { 
       type : Schema.Types.ObjectId,
       required : true,
       ref: 'User'
   },
   
   postId: {
       type : String,
       required : true
   },
   title: {
       type : String,
       required : true
   },
   content : {
       type : String,
       required : true
   },
   createdAt:{ // 글을 생성한 날짜 
       type : Date,
       default : Date.now
   }
},{timestamps:true})



const Board = mongoose.model('Board', boardSchema);

module.exports = { Board }