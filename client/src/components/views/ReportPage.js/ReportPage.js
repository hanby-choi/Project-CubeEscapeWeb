import Axios from 'axios';
import React, { useState } from 'react'
import { Input, Button } from 'antd';
import './ReportPage.css';

function ReportPage() {

    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const [files,setFiles]=useState([]);

    const onLoadFile = (e) => {
        const file = e.target.files;
        console.log(file);
        setFiles(file);
    }

    const handleClick = (e) => {
        const formdata = new FormData();
        for(var i=0; i<files.length; i++){
            formdata.append('files[]',files[i]);
        }

        const config = {
            Headers: {
                'content-type': 'multipart/form-data',
            }
        };

        Axios.post(`files`, formdata, config);
        
    }

    const createReport =()=>{
      
        let reportInfo ={
            reportId: Date.now(),
            title: title,
            content :content,
            files : handleClick(),
            createdAt : Date.now()
        }

        Axios.post('/api/report/create',reportInfo)
        .then((response)=>{
            if(response.data.success){
                alert('작성하신 폼이 제출되었습니다. 감사합니다.');
                //fetchReportList();
            }
            else{
                alert('제출하지 못했습니다.');
            }
        })
    }

    return (
        <div className='report'>
            <h1 style={{color:'white',fontFamily:'NotoSerifKR',borderBottom:`1px solid white`,marginTop:'30px', paddingBottom: '3px'}}>버그 제보</h1>
            <label>
                <div className='report_subtitle' style={{paddingRight: '440px'}}>제목<span style={{fontSize: '50%', paddingLeft: '5px', color: 'red'}}>*</span></div>
                <Input.TextArea autoSize={{ minRows: 1, maxRows: 6 }} name="title" onChange={(event)=>setTitle(event.target.value)} style={{color: 'black', fontFamily: 'NotoSerifKR', width: 500}} placeholder='제목을 입력해주세요'/>
            </label>
            <label>
                <div className='report_subtitle' style={{paddingRight: '390px'}}>제보 내용<span style={{fontSize: '50%', paddingLeft: '5px', color: 'red'}}>*</span></div>
                <Input.TextArea autoSize={{ minRows: 5, maxRows: 20 }} name="content" onChange={(event)=>setContent(event.target.value)} style={{color: 'black', fontFamily: 'NotoSerifKR', width: 500, }} placeholder='제보 내용을 입력해주세요'/>
            </label>
            <div className='report_subtitle' style={{paddingRight: '325px'}}>파일 첨부<span style={{fontSize: '50%', paddingLeft: '5px'}}>(스크린샷 등)</span></div>
            <input type='file' multiple name='files' onChange={onLoadFile} style={{paddingRight: '205px'}} />

            <Button variant="light" onClick={createReport} style={{color: 'black', width:'100px', marginTop: '20px'}}>제출</Button>
        </div>
        
    )
}

export default ReportPage
