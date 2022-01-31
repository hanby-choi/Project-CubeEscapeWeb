import React ,{useState} from 'react'
import {CKEditor} from 'ckeditor4-react';
import {Button,Form} from 'react-bootstrap';
import Axios from 'axios';

//props로 타입 전달.
function PostCreatePage(props) { // 
  const [title,setTitle] =useState('default title');
  const [content,setContent]=useState('default content');
  const url = props.match.url;
  const url_token=url.split('/');
   const type = url_token[2] ; // 

//type,writer,postId,title,content,createdAt

   const uploadPost = ()=>{
       let postInfo=
       {
           type : type,
           writer : localStorage.getItem('userId'),
           postId : Date.now(), // 글 고유 번호
           title : title,
           content : content,
           createdAt : Date.now()
       
       }
       
    Axios.post('/api/board/create',postInfo)
    .then(response=>{
            console.log(response);
        if(response.data.success){
            alert('글을 올렸습니다.');
            window.location.href='/forum/free';
        }
        else{
            alert('upload에 실패했습니다.');
        }
    })
       
   }
 

    return (
        <div >
            <Form.Control
          type="text"
          placeholder="글 제목"
          value = {title}
          onChange={(event)=>setTitle(event.target.value)}
         
        />
           <CKEditor
          data={content}
          onChange={(event)=>setContent(event.editor.getData())}
        ></CKEditor>
           <Button onClick={uploadPost} block>
          올리기
        </Button>
    
        </div>
    )
}

export default PostCreatePage
