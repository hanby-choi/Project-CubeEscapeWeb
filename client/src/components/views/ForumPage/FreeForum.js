import Axios from 'axios';
import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import BoardForm from './section/BoardForm';
import {Button} from 'react-bootstrap';

function FreeForumPage() {

  
   
    return (

      <div style={{padding:'20px',fontFamily:"NotoSerifKR"}}>
        <h1 style={{color:'white'}}>자유게시판</h1>
        <p>하고싶은 이야기들을 자유롭게 나눠보세요! </p>
        <Button style={{float : 'right',marginRight: '30px'}} variant="light"><Link to={`/forum/free/create`}>글쓰기</Link></Button>
        <BoardForm type="free"/*자유 게시판 글 목록 *//>
     
   
        </div>

        
    )
}

export default FreeForumPage
