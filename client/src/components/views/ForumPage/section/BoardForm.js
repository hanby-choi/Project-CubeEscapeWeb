import React, { Component } from "react";
import { Table,Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Axios from "axios";

class BoardRow extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.postNum}
        </td>
        <td>
          <NavLink
            to={{ pathname: `/forum/${this.props.type}/${this.props.postId}` }}
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

    //type에 맞는 게시판 목록 가져오기
    
    Axios.post('/api/board/getBoardList',{ type : this.props.type})
    .then(response=>{
      console.log(response)
      if(response.data.success){
       
        const boards = response.data.boardList;
        const numOfBoard = response.data.boardList.length;
        const boardRowList= boards.map((item,idx) => (
          <BoardRow
            key={idx}
            postNum={numOfBoard-idx}
            postId={item.postId}
            createdAt={item.createdAt}
            title={item.title}
            writer={item.writer}
            type={item.type}
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
       
        <table className="table" style={tableStyle}>
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