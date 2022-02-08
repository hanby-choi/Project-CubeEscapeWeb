import React from 'react'
import './IntroPage.css'
import stageImage from '../../images/stageImage'

function IntroPage() {
    return (
        <div className="intro">
            <div style={{position: 'absolute', top: '0px'}}><a name="story"> </a></div>
            <div style={{position: 'absolute', top: '400px'}}><a name="download"> </a></div>
            <div style={{position: 'absolute', top: '650px'}}><a name="system"> </a></div>
            <div style={{position: 'absolute', top: '1110px'}}><a name="intro"> </a></div>
            <div style={{position: 'absolute', top: '1820px'}}><a name="recommend"> </a></div>
            <div style={{position: 'absolute', top: '3180px'}}><a name="vidio"> </a></div>

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
                <a href="https://drive.google.com/drive/folders/1uB1wxeukfhtGZqeC5HApO5eKB4MJzkHh?usp=sharing"><button class="intro_button">Join the Game<div style={{fontSize: "70%"}}>(Download)</div></button></a>
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

            <div className="intro_title">INTRO</div>
            <br></br>
            <iframe width="1008" height="567" src="https://www.youtube.com/embed/iWjtblBltoo" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br></br>
            <br></br>
            
            <div className="intro_title">STAGE RECOMMENDATION</div>
            <div className="intro_body">
                <div>
                    1. 스토리를 중요하게 생각하시는 분
                    <div style={{textAlign: "center", paddingTop: "10px"}}>
                    <img src={stageImage.stage1TextImage} style={{width: "25%", height: "25%"}} alt="stage"></img>
                    <img src={stageImage.stage8TextImage} style={{width: "25%", height: "25%", marginLeft: "30px"}} alt="stage"></img>
                    </div>

                </div>
                <div>
                    2. 컨트롤에 자신 있으신 분
                    <div style={{textAlign: "center", paddingTop: "10px"}}>
                    <img src={stageImage.stage7TextImage} style={{width: "25%", height: "25%"}} alt="stage"></img>
                    <img src={stageImage.stage11TextImage} style={{width: "25%", height: "25%", marginLeft: "30px"}} alt="stage"></img>
                    </div>

                </div>
                <div>
                    3. 논리적이고 감각적인 분, 수수께끼에 자신 있으신 분
                    <div style={{textAlign: "center", paddingTop: "10px"}}>
                    <img src={stageImage.stage2TextImage} style={{width: "25%", height: "25%"}} alt="stage"></img>
                    <img src={stageImage.stage4TextImage} style={{width: "25%", height: "25%", marginLeft: "30px"}} alt="stage"></img>
                    <img src={stageImage.stage12TextImage} style={{width: "25%", height: "25%", marginLeft: "30px"}} alt="stage"></img>
                    </div>

                </div>
                <div>
                    4. 풍광을 중요하게 생각하시는 분
                    <div style={{textAlign: "center", paddingTop: "10px"}} alt="stage">
                    <img src={stageImage.stage5TextImage} style={{width: "25%", height: "25%"}} alt="stage"></img>
                    </div>

                </div>
                <div>
                    5. 공포와 마주하고 싶으신 분
                    <div style={{textAlign: "center", paddingTop: "10px"}} alt="stage">
                    <img src={stageImage.stage6TextImage} style={{width: "25%", height: "25%"}} alt="stage"></img>
                    <img src={stageImage.stage13TextImage} style={{width: "25%", height: "25%", marginLeft: "30px"}} alt="stage"></img>
                    </div>

                </div>
                <div>
                    6. 새로움을 느끼고 싶으신 분
                    <div style={{textAlign: "center", paddingTop: "10px"}} alt="stage">
                    <img src={stageImage.stage3TextImage} style={{width: "25%", height: "25%"}} alt="stage"></img>
                    <img src={stageImage.stage9TextImage} style={{width: "25%", height: "25%", marginLeft: "30px"}} alt="stage"></img>
                    </div>

                </div>
                <div>
                    7. 운을 시험해보고 싶으신 분
                    <div style={{textAlign: "center", paddingTop: "10px"}} alt="stage">
                    <img src={stageImage.stage10TextImage} style={{width: "25%", height: "25%"}} alt="stage"></img>
                    </div>

                </div>

            </div>
            <br></br>
            <br></br>


            <div className="intro_title">PLAY VIDEO</div>
            <br></br>
            <iframe width="1008" height="567" src="https://www.youtube.com/embed/XaHfOkf_mpI" 
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <br></br>
            
            <div className="intro_nav">
                <nav>
                    <ul style={{listStyle: "none", paddingLeft: "0px"}}>
                        <li><a href="#story">Story</a></li>
                        <li><a href="#download">Download</a></li>
                        <li><a href="#system">System</a></li>
                        <li><a href="#intro">Intro</a></li>
                        <li><a href="#recommend">Stage Recommendation</a></li>
                        <li><a href="#vidio">Play Video</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default IntroPage