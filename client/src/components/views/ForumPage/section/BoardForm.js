import React, { Component } from "react";
import { Table,Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Axios from "axios";

class BoardRow extends Component {
  render() {
    return (
      <tr>
        <td>
          <NavLink
            to={{ pathname: `/board/${this.props.type}/detail`, query: { postId: this.props.postId } }}
          >
            {this.props.createdAt.substring(0, 10)}
          </NavLink>
        </td>
        <td>
          <NavLink
            to={{ pathname: `/board/${this.props.type}/detail`, query: { postId: this.props.postId } }}
          >
            {this.props.title}
          </NavLink>
        </td>
      </tr>
    );
  }
}

class BoardForm extends Component {
  state = {
    boardList: [[<tr>
      <td >3</td>
      <td >타이틀제목</td>
      <td >asdvs</td>
      <td >2022.01.24</td>
    </tr>],[<tr>
      <td >2</td>
      <td >타이틀제목</td>
      <td >asdvs</td>
      <td >2022.01.24</td>
    </tr>],[<tr>
      <td >1</td>
      <td >타이틀제목</td>
      <td >asdvs</td>
      <td >2022.01.24</td>
    </tr>]]
  };

  componentDidMount() {
    //this.getBoardList();
  }

  getBoardList = () => {
    const send_param = {
      type:this.props.type,
    };
    //type에 맞는 게시판 목록 가져오기
    Axios
      .post("api/board/getBoardList", send_param)
      .then(returnData => {
        let boardList;
        console.log(returnData)
        if (returnData.data.boardList.length > 0) {
          // console.log(returnData.data.list.length);
          const boards = returnData.data.list;
          boardList = boards.map(item => (
            <BoardRow
              key={Date.now() + Math.random() * 500}
              _id={item.postId}
              createdAt={item.createdAt}
              title={item.title}
              type={this.props.type}
            ></BoardRow>
          ));
          // console.log(boardList);
          this.setState({
            boardList: boardList
          });
        } else {
          boardList = (
            <tr>
              <td colSpan="2">작성한 게시글이 존재하지 않습니다.</td>
            </tr>
          );
          this.setState({
            boardList: boardList
          });
          // window.location.reload();
        }
      })
      .catch(err => {
        console.log(err);
      });
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
    {this.state.boardList}
  </tbody>
</table>
      </div>
    );
  }
}

export default BoardForm;