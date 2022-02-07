import Axios from 'axios';
import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import BoardForm from './section/BoardForm';
import {Button} from 'react-bootstrap';

function PlayTipForumPage() {

  
   
    return (
       
        <div style={{padding:'20px',color:'white',fontFamily:"NotoSerifKR"}}>
         <h1 style={{color:'white'}}>공략게시판</h1><Button style={{float : 'right',marginRight: '30px'}} variant="light"><Link to={`/forum/playtip/create`}>글쓰기</Link></Button>
        <BoardForm type="playtip"/*자유 게시판 글 목록 *//>
   
        </div>

        
    )
}

export default PlayTipForumPage



