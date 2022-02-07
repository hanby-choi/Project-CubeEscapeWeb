import React, { useEffect,useState } from 'react'
import Axios from 'axios';
import {Button} from 'react-bootstrap';


//postId랑 type을 받아서 해당 글 목록을 출력해주는 페이지
function PostViewPage(props) {
    const postId= props.match.params.postId;
    var url_token=props.match.url.split('/');
    const type = url_token[2];
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const [updatedDate,setUpdatedDate]=useState('');
    const [authorId,setAuthorId]=useState();
    
    useEffect(()=>{
        const script = document.createElement("script");

        script.src = "https://use.typekit.net/foobar.js";
        script.async = true;
    
        document.body.appendChild(script);
    
        Axios.post('/api/board/getBoardDetail',{type:type,postId:postId })
        .then((response)=>{
            console.log(response);
           
            if(response.data.success){
                const board=response.data.board[0];
                setTitle(board.title);
                setContent(board.content);
                setUpdatedDate(board.updatedAt);
                setAuthorId(board.writer);

            }
            else{
                alert('글 정보를 가져오는데 실패했습니다.');
            }
        })
    },[])
    
   const deletePost = ()=>{

    Axios.post('/api/board/delete',{type: type ,postId:postId})
    .then((response)=>{
        if(response.data.success){
            alert('글을 삭제했습니다.');
            window.location.href=`/forum/${type}`;
        }
        else{
            alert('글을 삭제하지 못했습니다.');
        }
    })
    
   }

   

    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'50px'}}>
          
            <h1 style={{backgroundColor:'white',color:'black',borderRadius:'10px'}}>{title}</h1>
            <br/>
            <section style={{backgroundColor:'white',color:'black',borderRadius:'10px',width:'70%'}}>{content}</section>
            <br/>
            <div>updatedAt : {updatedDate} </div>
            {localStorage.getItem('userId')==authorId?<Button onClick ={deletePost} style={{alignSelf:'flex-end' ,marginRight: '30px'}} variant="light">글삭제</Button>:null}
            
        </div>
    )
}

export default PostViewPage
