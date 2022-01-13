import React, { useState } from 'react';
import Menu from './Sections/Menu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';

function NavBar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%', backgroundColor:'black' }}>
      <div className="menu__logo">
        <a href="/">Cubeescape</a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <Menu mode="horizontal" />
        </div>
          
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="inline" />
         
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar