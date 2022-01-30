const express = require('express');
const router = express.Router();
const { Review } = require("../models/Review");


router.post('/create',(req,res)=>{

    const review = new Review(req.body);

    review.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        else res.status(200).json({success: true,doc:doc})
    });
})


router.post('/delete',(req,res)=>{

    Review.findOneAndDelete({_id:req.body._id }) // 이 두 조건에 해당하는 db모델 지우기. 
    .exec((err,doc)=>{
         if(err) return res.status(400).send(err);
         else res.status(200).json({success: true, doc :doc}); 
    })
 
})


router.post('/getReviewList',(req,res)=>{
   
    Review.find()
    .exec((err,reviewList)=>{ 
        if(err) return res.status(400).send(arr)
        return res.status(200).json({success: true, reviewList})
    })
    
});

module.exports = router;