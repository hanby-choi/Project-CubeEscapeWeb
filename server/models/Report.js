const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = mongoose.Schema({
    reportId: {
        type : String,
        required : true
    },
  
    title: {
        type : String,
        required : true
    },

    content: {
        type : String,
        required : true
    },

    files: {
       type : [mongoose.Schema.Types.Mixed ]
    },

    createdAt:{ // 글을 생성한 날짜 
        type : Date,
        default : Date.now()
    }
})

const Report = mongoose.model('Report', reportSchema);

module.exports = {Report}