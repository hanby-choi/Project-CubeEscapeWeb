import React from 'react'
import {Link} from "react-router-dom";

function FreeForumPage({match}) {

    console.log(match.path)
    return (
        <div>
       
          <Link to={`/forum/free/create`}>create</Link>
          <Link to={`/forum/free/1234`}>postdetail</Link>
        </div>

        
    )
}

export default FreeForumPage
