import Axios from 'axios';
import React,{useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import BoardForm from './section/BoardForm';
import {Button} from 'react-bootstrap';

function FreeForumPage({match}) {

  const [boardList,setBoardList]=useState([]);

  useEffect(() => {
     
    //getBoardList();
  }, [])


  const getBoardList=()=>{

    Axios.post('/api/board/getBoardList',{ type : 'free'})
    .then(response=>{
      console.log(response)
      if(response.data.success){
        alert('게시글 목록을 가져오는데 성공했습니다.');
      }else{
        alert('게시글 목록을 가져오는데 실패했습니다.');
      }

    })
  }
   
    return (
       
      <div>
        <h1>공략게시판</h1><Button style={{float : 'right',marginRight: '30px'}} variant="light"><Link to={`/forum/free/create`}>글쓰기</Link></Button>
        <BoardForm type="free"/*자유 게시판 글 목록 *//>
   
        </div>

        
    )
}

export default FreeForumPage
