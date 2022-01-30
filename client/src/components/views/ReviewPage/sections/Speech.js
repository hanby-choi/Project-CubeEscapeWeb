import React from 'react';


function Speech({data}) {

    const {content,ratings,nickname} = data;
  return <div style={{backgroundColor:'white'}}>
      {content} {ratings} {nickname}
  </div>;
}

export default Speech;
