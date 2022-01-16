import React from 'react'

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p>
                <img src="/images/mail_icon.png" width="25" height="25"></img>
                <span> cubeescape2021@gmail.com </span>
                <img src="/images/github_icon.png" width="25" height="25"></img>
                <a href="https://github.com/Cube-escape/CubeEscape"> Cube-escape/CubeEscape</a>
           </p>
           <p> © CubeEscape 2021. all rights reserved. </p>
        </div>
    )
}

export default Footer
