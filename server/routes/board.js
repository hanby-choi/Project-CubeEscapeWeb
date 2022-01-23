const express = require('express');
const router = express.Router();
const { Board } = require("../models/User");


//=================================
//             Board
//=================================


// 게시글 추가하기
router.post('/create',(req,res)=>{
    const board = new Board(req.body)

    board.save((err,doc)=>{
        if(err) return res.status(400).send(err);
        else res.status(200).json({success: true,doc:doc})
    });
})

// 게시글 삭제
router.post('/remove',(request,response)=>{ 
    Board.findOneAndDelete({type: req.body.type,postId: request.body.postId ,writer : request.body.writer}) // 이 두 조건에 해당하는 db모델 지우기. 
    .exec((err,doc)=>{
         if(err) return response.status(400).send(err);
         else response.status(200).json({success: true, doc :doc}); 
    })
 })


//게시글 수정 요청
router.post('/update',(req,res)=>{
    Board.update(
        {type: req.body.type,postId: req.body.postId},
        {$set:{
            writer: req.body.writer,
            title : req.body.title,
            content : req.body.content
        }})
        .exec((err,doc)=>{
            if(err) return response.status(400).send(err);
            else response.status(200).json({success: true, doc :doc}); 
        });
    
});

// 자유OR공략OR아이디어 게시판에서 전체 게시글 내용 불러오기 요청
router.post('/getBoardList',(req,res)=>{
   
    Favorite.find({type: req.body.type,sort:{createdAt:-1}})
    .exec((err,boardList)=>{ 
        if(err) return response.status(400).send(arr)
        return response.status(200).json({success: true, boardList})
    })
    
});


// 특정 게시글 내용 불러오기 요청
router.post('/getBoardDetail',(req,res)=>{
   
    Favorite.find({type: req.body.type,postId: req.body.postId})
    .exec((err,board)=>{ 
        if(err) return response.status(400).send(arr)
        return response.status(200).json({success: true, board})
    })
    

});

module.exports = router;
