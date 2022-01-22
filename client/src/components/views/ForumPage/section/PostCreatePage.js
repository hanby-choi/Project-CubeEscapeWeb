import React from 'react'
import {CKEditor} from 'ckeditor4-react';

function PostCreatePage({match}) {
    console.log(match)
    return (
        <div style={{color:'white'}}>
           <CKEditor></CKEditor>
           
        </div>
    )
}

export default PostCreatePage
