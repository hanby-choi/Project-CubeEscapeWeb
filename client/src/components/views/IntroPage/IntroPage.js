import React from 'react'
import './IntroPage.css';

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
                    “여긴 어디…?”
                </p>
                
                <p>이때 큐브의 지배인 C가 나타나 <span style={{color:'red'}}>죽음의 탈출게임</span>을 제안한다.</p>

                <p>
                    “이곳은 3X3 CUBE , 각 방 안에 있는 기이한 트릭과 장치들이 널 괴롭힐 거다.<br></br>
                    무사히 탈출하길 바라지.”
                </p>

                <p>살아서 나가고 싶다면 정신 똑바로 차려야 해.</p>
            </div>

            <div className="intro_title">SYSTEM</div>

            <div className="intro_title">STAGE RECOMMENDATION</div>

            <div className="intro_title">PLAY VIDIO</div>
        </div>
    )
}

export default IntroPage
