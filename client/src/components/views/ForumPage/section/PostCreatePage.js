import React ,{useState} from 'react'
import {CKEditor} from 'ckeditor4-react';
import {Button,Form} from 'react-bootstrap';
import Axios from 'axios';

//props로 타입 전달.
function PostCreatePage(props) {
   const [data,setData] = useState("");
   const type = 'free' ; // 
   console.log(data);

   const savePost = ()=>{
       alert('글이 저장되었습니다.');
   }

    return (
        <div style={{color:'white'}}>
            <Form.Control
          type="text"
          placeholder="글 제목"

        />
           <CKEditor
          data={data}
          onChange={(event)=>setData(event.editor.getData())}
        ></CKEditor>
           <Button onClick={savePost} block>
          저장하기
        </Button>
        </div>
    )
}

export default PostCreatePage
