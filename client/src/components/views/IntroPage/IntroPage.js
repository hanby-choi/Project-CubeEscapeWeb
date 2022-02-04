import React from 'react'
import './IntroPage.css'

function IntroPage() {
    return (
        <div className="intro">
            <img src="/images/cube_with_hands.png" width="40%" height="40%"></img>
            <br></br>
            <div className="intro_title">CUBE ESCAPE : DEATH GAME</div>
            <div className="intro_body">
                <p>
                    정신을 차려보니 정체를 알 수 없는 큐브 공간속에 갇혀 있었다.<br></br>
                    아무것도 기억이 나질 않는다.<br></br>
                    “여긴 어디지…?”
                </p>
                
                <p>이때 큐브의 지배인 C가 나타나 <span style={{color:'red'}}>죽음의 탈출게임</span>을 제안한다.</p>

                <p>
                    “이곳은 3X3 CUBE , 각 방 안에 있는 기이한 트릭과 장치들이 널 괴롭힐 거다.<br></br>
                    무사히 탈출하길 바라지.”
                </p>

                <p>살아서 나가고 싶다면 정신 똑바로 차려야 해.</p>
            </div>

            <p>
                <a href="" download><button class="intro_button">Join the Game</button></a>
                <br></br>
                <br></br>
            </p>

            <div className="intro_title">SYSTEM</div>
            <div style={{textAlign: "center", paddingTop: "10px"}}>
            <img src="/images/exit_resize.png" style={{width: "10%", height: "10%", marginLeft: "15px"}}></img>
            <img src="/images/cancel.png" width="5%" height="5%"></img>
            <img src="/images/mysterious.png" width="10%" height="10%"></img>
            <img src="/images/cancel.png" width="5%" height="5%"></img>
            <img src="/images/open-book.png" style={{width: "10%", height: "10%", marginLeft: "15px"}}></img>
            </div>
            <div className="intro_body">
                <span style={{marginLeft:"20px", marginRight: "30px"}}>1인칭 시점 방 탈출</span>
                <span style={{marginRight: "50px"}}>미스터리 퍼즐 어드벤처</span>
                <span style={{marginLeft:"30px", marginRight: "85px"}}>스토리</span>
            </div>
            <br></br>
            <br></br>
            
            <div className="intro_title">STAGE RECOMMENDATION</div>
            <br></br>
            <br></br>

            <div className="intro_title">PLAY VIDIO</div>
            <br></br>
            <iframe width="1008" height="567" src="https://www.youtube.com/embed/XaHfOkf_mpI" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br></br>
        </div>
    )
}

export default IntroPage

/*
            <table>
                <tr>
                <td><img src="/images/exit.png" width="40%" height="40%"></img></td>
                <td><img src="/images/mysterious.png" width="30%" height="30%"></img></td>
                <td><img src="/images/open-book.png" width="30%" height="30%"></img></td>
                </tr>
            </table>*/