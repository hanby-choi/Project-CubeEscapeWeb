import React from 'react'
import GridCard from './Sections/GridCard'
import {Row} from 'antd';
import stageImage from '../../../components/images/stageImage';

function HintPage() {
    const stageImages=[stageImage.stage1Image,stageImage.stage2Image,stageImage.stage3Image,stageImage.stage4Image,stageImage.stage5Image,
        stageImage.stage6Image,stageImage.stage7Image,stageImage.stage8Image,stageImage.stage9Image,stageImage.stage10Image
    ,stageImage.stage11Image,stageImage.stage12Image,stageImage.stage13Image]

  
    return (
        <div style={{ width : '100%'}}>
        
               <h1 style={{textAlign:'center',fontFamily:`'Times New Roman', Times, serif`,margin:'100px',color:'white'}}>공략법/힌트</h1>

            <div style={{ width : '70%', margin: '1rem auto'}}>
          <Row gutter={[24,24]}/*상하좌우 여백주기*/> 
               {stageImages.map((stageImage,index)=>(
                   <React.Fragment key={index}>
                       <GridCard 
                        image={stageImage}
                        stageId={index+1/*고유번호*/}
                        stageName ={`stage${index+1}`}
                       />
                
                   </React.Fragment>
                ) )}
           </Row>
           </div>
        </div>
    )
}

export default HintPage
