import React from 'react';
import {Rating} from 'react-simple-star-rating';

function Speech({data}) {

    const {content,ratings,writer} = data;
  return <div style={{color:'black',fontFamily:'휴먼아미체',margin:'10px', backgroundColor:'white',width:'800px',height:'250px',background: `url('https://www.pngkit.com/png/full/26-266835_blank-speech-bubble-blank-pixel-speech-bubble-png.png')`}}>

      
      <h1 style={{margin:'40px',textAlign:'center'}}>{content}</h1>
      <div style={{float:'right',marginRight:'50px',fontSize:'50px'}}>

      <Rating readonly={true}  ratingValue={ratings}/> <span>{writer}</span>
      </div>
  </div>;
}

export default Speech;
