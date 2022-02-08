import React from 'react'
import './CreditPage.css';

function CreditPage() {
    return (
        <div className="credit">
            <div className="credit_title">CREDIT</div>
            <div className="credit_title" style={{fontSize: '150%', paddingTop: '20px'}}>CUBE ESCAPE GAME</div>
            <div className="credit_container">
                <div className="credit_subtitle"> 
                    MAIN GAME DESIGN<br></br>
                    SUB GAME DESIGN<br></br>
                    PROGRAMMING<br></br>
                    ART<br></br>
                    PROJECT MANAGER
                </div>
                <div className="credit_body">
                    김서연<br></br>
                    김지연 이선의 최한비 황주이<br></br>
                    김서연 김지연 이선의 최한비 황주이<br></br>
                    김서연<br></br>
                    김서연
                </div>
            </div>
            <div className="credit_title" style={{fontSize: '150%', paddingTop: '30px'}}>CUBE ESCAPE WEB</div>
            <div className="credit_container">
                <div className="credit_subtitle"> 
                    WEB DESIGN<br></br>
                    WEB FRONT-END<br></br>
                    WEB BACK-END<br></br>
                    ART
                </div>
                <div className="credit_body" style={{paddingRight: '185px'}}>
                    김서연 최한비<br></br>
                    김서연 최한비<br></br>
                    김서연 최한비<br></br>
                    최한비
                </div>
            </div>
            <div className="credit_title" style={{fontSize: '150%', paddingTop: '30px'}}>GITHUB</div>
            <div className="credit_container">
                <div className='credit_body'>
                <div>
                    <img src="/images/github_icon.png" width="25" height="25" style={{marginRight: "10px"}}></img>
                    <a href="https://github.com/Cube-escape/CubeEscape">Cube-escape/CubeEscape</a>
                </div>
                <div>
                    <img src="/images/github_icon.png" width="25" height="25" style={{marginRight: "10px"}}></img>
                    <a href="https://github.com/Cube-escape/Web_CubeEscape">Cube-escape/Web_CubeEscape</a>
                </div>
                </div>
            </div>
            <div className="credit_title" style={{fontSize: '150%', paddingTop: '30px'}}>WEB ICON</div>
            <div className="credit_container" style={{marginLeft: "30px"}}>
                <div className="credit_body">
                    <div><img src="/images/open-book.png" width="25" height="25" style={{marginRight: "10px"}}></img>
                    Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik</a> 
                    <span></span> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

                    <div><img src="/images/exit_resize.png" width="25" height="25" style={{marginRight: "10px"}}></img>
                    Icons made by <a href="https://www.flaticon.com/authors/bsd" title="bsd"> bsd</a> 
                    <span></span> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

                    <div><img src="/images/mysterious.png" width="25" height="25" style={{marginRight: "10px"}}></img>
                    Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware"> Good Ware</a> 
                    <span></span> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

                    <div><img src="/images/cancel.png" width="25" height="25" style={{marginRight: "10px"}}></img>
                    Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik</a> 
                    <span></span> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    
                    <div><img src="/images/document.png" width="25" height="25" style={{marginRight: "10px"}}></img>
                    Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart"> smalllikeart</a> 
                    <span></span> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </div>            
        </div>
    )
}

export default CreditPage