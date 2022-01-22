import React from 'react'
import MainImage from './Sections/MainImage'
import stageImage from '../../../components/images/stageImage';

function HintDetailPage(props) {
    let stageId=props.match.params.stageId;
    const stageInfo=[
        {stageName:'The Cube',stageText:'정신을 차려보니 알 수 없는 큐브공간 속에 갇혀있었다. 나는 누구이고 관리인C의 정체는 누구인가. ',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage1Image},
        {stageName:'The White Gallery',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage2Image},
        {stageName:'The Christmas',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage3Image},
        {stageName:'The Liar',stageText:'stage Introduction',hint:[['Q1','Q2','Q3'] ,["hint1","hint2","hint3"]],stageImage:stageImage.stage4Image},
        {stageName:'The River Of Oblivion',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage5Image},
        {stageName:'The Nightmare',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage6Image},
        {stageName:'The Reverse',stageText:'모든것이 거꾸로인 공간\n “발을 조금이라도 잘못딛는 순간 넌 끝없는 나락속으로 떨어지고 말걸”',stageImage:stageImage.stage7Image},
        {stageName:'The Unconcious',stageText:'관리인 C의 무의식의 세계. 도대체 그에겐 무슨일이 있었던 걸까.',stageImage:stageImage.stage8Image},
        {stageName:'The Game',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage9Image},
        {stageName:'The Fate',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage10Image},
        {stageName:'The Maze',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage11Image},
        {stageName:'The Weight Of Vice',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage12Image},
        {stageName:'The Unknown',stageText:'stage Introduction',hint:{question :['Q1','Q2','Q3'] ,answer:["hint1","hint2","hint3"]},stageImage:stageImage.stage13Image}
    ]

    const hintQuestion = stageInfo[stageId-1].hint.question
    const hintAnswer = stageInfo[stageId-1].hint.answer

    console.log(hintQuestion)
   const getHintContainer =()=>{
        const container=[]
        
        for(var i=0;i<hintQuestion.length;i++){
            container.push( <div>
                <details style={{color:'white'}}>
                    <summary >STEP{i+1}.{hintQuestion[i]}</summary>
                    <span >{hintAnswer[i]}</span>
                </details>
                </div>
            )
           
        }

        return container;
   }
    
    return (
        <div>
            <MainImage image={stageInfo[stageId-1].stageImage} stageId={stageId} stageName={stageInfo[stageId-1].stageName} stageText={stageInfo[stageId-1].stageText}></MainImage>
            <div style={{width:'70%',fontSize:'1rem',margin:'20px'}}> 
            {getHintContainer()}
            </div>
        </div>
    )
}

export default HintDetailPage
