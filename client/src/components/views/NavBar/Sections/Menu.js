import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode} style={{backgroundColor:'black'}}>
    <Menu.Item >
      <a href="/intro">게임소개</a>
    </Menu.Item>
    <Menu.Item >
      <a href="/hint">공략법/힌트</a>
    </Menu.Item>
    <SubMenu title={<a href="/forum">게시판</a>}>
        <Menu.Item key="setting:1">자유게시판</Menu.Item>
        <Menu.Item key="setting:2">공략게시판</Menu.Item>
        <Menu.Item key="setting:2">아이디어게시판</Menu.Item>
    </SubMenu>
    <Menu.Item >
      <a href="/review">리뷰</a>
    </Menu.Item>
    <Menu.Item >
      <a href="/report">문의/버그 제보</a>
    </Menu.Item>
   
  </Menu>
  )
}

export default LeftMenu