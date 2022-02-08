import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Speech from './sections/Speech';
import {Rating} from 'react-simple-star-rating';
import {Button} from 'react-bootstrap';
function ReviewPage() {

    const [reviewList,setReviewList]=useState([]);

    const [writer,setWriter]=useState('');
    const [content,setContent]=useState('');
    const [ratings,setRatings]=useState(5);

   
    useEffect(()=>{
        fetchReviewList();
    },[])

    const fetchReviewList = ()=>{
    Axios.post('/api/review/getReviewList')
        .then((response)=>{
            if(response.data.success){
                const reviews = response.data.reviewList;
                setReviewList(reviews);
                console.log(reviews);
               
            }
            else{
                alert('리뷰 목록을 가져오는데 실패했습니다.')
            }
        })

    }
    
    const createReview =()=>{
      
        let reviewInfo ={
            writer : writer,
            content :content,
            ratings : ratings,
            
        }
        Axios.post('/api/review/create',reviewInfo)
        .then((response)=>{
            if(response.data.success){
                alert('리뷰를 올렸습니다.');
                fetchReviewList();
            }
            else{
                alert('리뷰를 올리지 못했습니다.');
            }
        })
    }
    return (
 
        <div style={{ display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',fontFamily: "NotoSerifKR"}}>
            
            <h1 style={{color:'white',borderBottom:`1px solid white`,margin:'30px'}}>Best Reviews</h1>
            {reviewList.map((review,idx)=>{
                return (
                    <Speech data={review} key={review._id} idx={idx}/>
                )
            })}
                
                <label>
                    Writer : 
                    <input type="text" name="name" onChange={(event)=>setWriter(event.target.value)} style={{color: 'black'}} placeholder='리뷰작성자'/>
                </label>
                <label>
                    content : 
                    <input type="text" name="content"  onChange={(event)=>setContent(event.target.value)} style={{color: 'black',width:'1000px',height:'200px'}} placeholder='리뷰내용'/>
                </label>

               
               <Rating onClick={(rate)=>setRatings(rate)}/>
                <Button variant="light" onClick={createReview} block="true" style={{color: 'black',width:'100px'}}>올리기</Button>
               
          
    
        </div>

    )
}


export default ReviewPage;