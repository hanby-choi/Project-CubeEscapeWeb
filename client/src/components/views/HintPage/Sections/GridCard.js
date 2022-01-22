import React from 'react'
import {Col} from 'antd';


function GridCard(props) {
    
    return (
        <Col lg={8} md={12} xs={24}/* 한 줄이 24 size */> 
        <div style={{ position : 'relative'}}>
           <a href ={`/hint/${props.stageId}`/*영화 상세페이지로 이동*/}>
               <img style={{ width : '100%', height:'200px' }}src={props.image} alt={props.stageName}/>
           </a>
           
           <h2 style={{color: 'white',textAlign:'center',fontFamily:`휴먼아미체`}}>{props.stageName}</h2>

        </div>
        </Col>
    )
}

export default GridCard