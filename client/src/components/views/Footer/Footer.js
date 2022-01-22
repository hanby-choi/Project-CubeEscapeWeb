import React from 'react'

function Footer() {
    return (
        <div classname="footer" style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem', 
            backgroundColor: 'black', color: 'white',
            paddingTop: '20px', textAlign: 'center'
        }}>
           <p>
                <img src="/images/mail_icon.png" width="25" height="25"></img>
                <span> cubeescape2021@gmail.com </span>
                <img src="/images/github_icon.png" width="25" height="25"></img>
                <a href="https://github.com/Cube-escape/CubeEscape" style={{color: 'white'}}> Cube-escape/CubeEscape</a>
                <div>© CubeEscape 2021. all rights reserved.</div>
           </p>
        </div>
    )
}

export default Footer
