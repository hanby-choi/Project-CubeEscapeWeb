import Axios from 'axios';
import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import BoardForm from './section/BoardForm';
import {Button} from 'react-bootstrap';

function IdeaForumPage() {

  
   
    return (
       
        <div style={{padding:'20px',color:'white',fontFamily:"NotoSerifKR"}}>
          <h1 style={{color:'white'}}>아이디어게시판</h1>
          <p>큐브이스케이프 시즌 2가 제작된다면 어떤 컨셉의 스테이지가 있었으면 좋겠나요? 여러분의 기획력을 뽐내주세요! </p>
          <Button style={{float : 'right',marginRight: '30px'}} variant="light"><Link to={`/forum/idea/create`}>글쓰기</Link></Button>
        <BoardForm type="idea"/*자유 게시판 글 목록 *//>
   
        </div>

        
    )
}

export default  IdeaForumPage

