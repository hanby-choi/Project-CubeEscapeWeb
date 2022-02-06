import React from 'react'
import MainImage from './Sections/MainImage'
import Credit from './Sections/Credit'
import stageInfo from '../../../constants/StageInfo';
import StageCredit from '../../../constants/StageCredit';


function HintDetailPage(props) {
    let stageId = props.match.params.stageId;

    const hintQuestion = stageInfo[stageId-1].hint.question
    const hintAnswer = stageInfo[stageId-1].hint.answer

   const getHintContainer =()=>{
        const container=[]
        
        for(var i=0;i<hintQuestion.length;i++){
            container.push( <div>
                <details >
                    <summary >STEP{i+1}.{hintQuestion[i]}</summary>
                    <span >{hintAnswer[i]}</span>
                </details>
                </div>
            )
           
        }

        return container;
   }
    
   const getDifficulty=()=>{
    let difficulty="";
    for(var i=0;i<stageInfo[stageId-1].difficulty;i++)
    difficulty+='⭐';

    return difficulty;
   } 
    return (
        <div>
            <MainImage image={stageInfo[stageId-1].stageImage} stageId={stageId} stageName={stageInfo[stageId-1].stageName} stageText={stageInfo[stageId-1].stageText}></MainImage>
            <div style={{width:'70%', fontSize:'1rem', padding:'20px'}}>
                <h3 style={{color:'white', fontFamily:'휴먼 아미체'}}>Difficulty</h3> 
                <div style={{marginBottom:'10px'}}>{getDifficulty()}</div>
                <h3 style={{color:'white', fontFamily:'휴먼 아미체'}}>Hints</h3>
                <div>{getHintContainer()}</div>
                <h3 style={{color:'white', fontFamily:'NotoSerifKR', paddingTop: '10px'}}>Credit</h3>
                <Credit creditTitle={StageCredit[stageId-1].creditTitle} creditBody={StageCredit[stageId-1].creditBody}></Credit>
            </div>
        </div>
    )
}

export default HintDetailPage
