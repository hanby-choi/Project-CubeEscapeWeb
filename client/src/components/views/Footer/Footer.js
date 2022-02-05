import React from 'react'
import '../../App.css'

function Footer() {
    return (
        <div className="footer" style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem', 
            backgroundColor: 'black', color: 'white',
            paddingTop: '20px', textAlign: 'center', fontFamily: 'Oranienbaum'
        }}>
           <div>
                <img src="/images/mail_icon.png" width="25" height="25"></img>
                <span> cubeescape2021@gmail.com </span>
                <img src="/images/github_icon.png" width="25" height="25"></img>
                <a href="https://github.com/Cube-escape/CubeEscape" style={{color: 'white', paddingLeft: '3px', paddingRight: '6px'}}>Cube-escape/CubeEscape</a>
                <img src="/images/document.png" width="20" height="20"></img>
                <a style={{color: 'white', paddingLeft: '5px'}} href="/credit">CREDIT</a>
                <div>© CubeEscape 2021. all rights reserved.</div>
           </div>
        </div>
    )
}

export default Footer
