import React from 'react';
import {Rating} from 'react-simple-star-rating';
import {speech} from '../../../images/Image';

function Speech({data,idx}) {

  console.log(idx)
    const {content,ratings,writer} = data;
    let imgSrc=speech.left;
    if(idx%2===0){
     imgSrc = speech.left;
    }
    else{
     imgSrc = speech.right;
    }
   
  return <div style={{color:'black',fontFamily: "NotoSerifKR",margin:'10px', backgroundColor:'white',width:'800px',height:'275px',background: `url(${imgSrc})`}}>

      
      <h2 style={{margin:'40px',textAlign:'center'}}>{content}</h2>
      <div style={{float:'right',marginRight:'50px',fontSize:'30px'}}>

      <Rating readonly={true}  ratingValue={ratings}/> <span>{writer}</span>
      </div>
  </div>;
}

export default Speech;
