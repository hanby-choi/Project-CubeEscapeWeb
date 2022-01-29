import React, { Component } from "react";
import { Table,Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Axios from "axios";

class BoardRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.postId}
        </td>
        <td>
          <NavLink
            to={{ pathname: `/board/${this.props.type}/detail/:${this.props.postId}` }}
          >
            {this.props.title}
          </NavLink>
        </td>
        <td>
          {this.props.writer}
        </td>
        <td>
            {this.props.createdAt.substring(0, 10)}
        </td>
       
      </tr>
    );
  }
}

class BoardForm extends Component {
  state = {
    boardRowList: []
  };

  componentDidMount() {
    this.getBoardList();
  }

  getBoardList = () => {
    const send_param = {
      type:this.props.type,
    };
    //type에 맞는 게시판 목록 가져오기
    
    Axios.post('/api/board/getBoardList',{ type : this.props.type})
    .then(response=>{
      console.log(response)
      if(response.data.success){
        alert('게시글 목록을 가져오는데 성공했습니다.');
        const boards = response.data.boardList;
        const boardRowList= boards.map((item,idx) => (
          <BoardRow
            key={idx}
            postId={item.postId}
            createdAt={item.createdAt}
            title={item.title}
            writer={item.writer}
          /> ));
          this.setState({
            boardRowList: boardRowList
          });
      }else{
        alert('게시글 목록을 가져오는데 실패했습니다.');
        window.location.reload();
      }

    })
     
  };

  render() {
    const divStyle = {
      margin: 50,


    };
    const tableStyle={
      color: 'white',
    }

    return (
      <div style={divStyle}>
       
        <table class="table" style={tableStyle}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">제목</th>
      <th scope="col">글쓴이</th>
      <th scope="col">날짜</th>
    </tr>
  </thead>
  <tbody>
    {this.state.boardRowList}
  </tbody>
</table>
      </div>
    );
  }
}

export default BoardForm;