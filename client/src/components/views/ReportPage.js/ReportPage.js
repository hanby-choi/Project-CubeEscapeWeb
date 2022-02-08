import Axios from 'axios';
import React, { useState } from 'react'
import { Input, Button } from 'antd';
import './ReportPage.css';

function ReportPage() {

    /*
    state = { selectedFiles: null }

    fileChangedHandler = event => {
        const files = event.target.files;
        console.log(files);
        this.setState({
        selectedFiles: files
        });
    };

    onClickHandler = event => {
        const formData = new FormData();
        formData.append(
          "uploadImages",
          this.state.selectedFiles,
          this.state.selectedFiles.name
        );
        const config = {
          headers: {
            "content-type": "multipart/form-data"
          }
        };
        axios.post(`uploadAPI`, formData, config);

        <input type="file" multiple onChange={this.fileChangedHandler} />
            <button onClick={this.onClickHandler}>저장하기</button>
      };*/

    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');

    const createReport =()=>{
      
        let reportInfo ={
            reportId: Date.now(),
            title: title,
            content :content,
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
            

            <Button variant="light" onClick={createReport} block="true" style={{color: 'black', width:'100px', marginTop: '20px'}}>제출</Button>
        </div>
        
    )
}

export default ReportPage
