import React from 'react'
import GridCard from './Sections/GridCard'
import {Row} from 'antd';
import stageInfo from '../../../constants/StageInfo';
import stageImage from '../../images/stageImage';

function HintPage() {
    const stageTextImages=[stageImage.stage1TextImage,stageImage.stage2TextImage,stageImage.stage3TextImage,stageImage.stage4TextImage,stageImage.stage5TextImage,
        stageImage.stage6TextImage,stageImage.stage7TextImage,stageImage.stage8TextImage,stageImage.stage9TextImage,stageImage.stage10TextImage
    ,stageImage.stage11TextImage,stageImage.stage12TextImage,stageImage.stage13TextImage]
        console.log(stageInfo)
    
    return (
        <div style={{ width : '100%'}}>
        
               <h1 style={{textAlign:'center',fontFamily:`'Times New Roman', Times, serif`,margin:'100px',paddingBottom:'10px',color:'white', borderBottom: `1px solid gray`}}>스테이지 소개</h1>

            <div style={{ width : '70%', margin: '1rem auto'}}>
          <Row gutter={[24,24]}/*상하좌우 여백주기*/> 
               {stageTextImages.map((stageImage,index)=>(
                   <React.Fragment key={index}>
                       <GridCard 
                        image={stageImage}
                        stageId={index+1/*고유번호*/}
                        stageName={stageInfo[index].stageName}
                       />
                
                   </React.Fragment>
                ) )}
           </Row>
           </div>
        </div>
    )
}

export default HintPage
