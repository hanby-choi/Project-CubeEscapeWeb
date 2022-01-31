import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode} style={{backgroundColor:'black'}}>
    <Menu.Item key='intro' >
      <a href="/intro">게임소개</a>
    </Menu.Item>
    <Menu.Item key='hint'>
      <a href="/hint">공략법/힌트</a>
    </Menu.Item>
    <SubMenu title={<a href="/forum">게시판</a>}>
        <Menu.Item key="setting:1"><a href="/forum/free">자유게시판</a></Menu.Item>
        <Menu.Item key="setting:2"><a href="/forum/playtip">공략게시판</a></Menu.Item>
        <Menu.Item key="setting:3"><a href="/forum/idea">아이디어게시판</a></Menu.Item>
    </SubMenu>
    <Menu.Item key='review'>
      <a href="/review">리뷰</a>
    </Menu.Item>
    <Menu.Item key='report'>
      <a href="/report">문의/버그 제보</a>
    </Menu.Item>
    <Menu.Item >
      <a href="/credit">크레딧</a>
    </Menu.Item>
   
  </Menu>
  )
}

export default LeftMenu