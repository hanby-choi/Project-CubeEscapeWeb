import React, { useState } from 'react';
import Menu from './Sections/Menu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
import LoginMenu from './Sections/LoginMenu';


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
        <a href="/">CUBE ESCAPE</a>
      </div>
      <div className="menu__container">
      <span className="menu_left">
          <Menu mode="horizontal" />
        </span>
  
        <Button id="btn" style={{marginTop:'15px',backgroundColor:'black',color:'white'}}>get started</Button>
        <span className="menu_right">
          <LoginMenu mode="horizontal" />
        </span>
        
          
    
        
      </div>
    </nav>
  )
}

export default NavBar