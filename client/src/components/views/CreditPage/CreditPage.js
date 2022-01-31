import React from 'react'
import './CreditPage.css';

function CreditPage() {
    return (
        <div className="credit">
            <div className="credit_title">CREDIT</div>
            <p>
                <div className="credit_subtitle" style={{position: 'absolute', top: '140px'}}> 
                    MAIN GAME DESIGN<br></br>
                    SUB GAME DESIGN<br></br>
                    PROGRAMMING<br></br>
                    ART<br></br>
                    PROJECT MANAGER
                </div>
                <div className="credit_body" style={{position: 'absolute', top: '140px'}}>
                    김서연<br></br>
                    김지연 이선의 최한비 황주이<br></br>
                    김서연 김지연 이선의 최한비 황주이<br></br>
                    김서연<br></br>
                    김서연
                </div>
            </p>
            <p>
                <div className="credit_title" style={{fontSize: '200%', top: '160px'}}>STAGE 1 : THE CUBE</div>
                <div className="credit_subtitle" style={{position: 'absolute', top: '360px'}}> 
                    MAIN DEVELOPER<br></br>
                    SUB DEVELOPER<br></br>
                    BGM
                </div>
                <div className="credit_body" style={{position: 'absolute', top: '360px'}}>
                    최한비<br></br>
                    김서연<br></br>
                    Song: Diplopia - Lucifer sonata<br></br>
                    Follow Artist: http://bit.ly/38FwZAW<br></br> 
                    Music promoted by DayDreamSound: https://youtu.be/rpUxwjL32xk<br></br>
                    Song: KOTDARI - Save<br></br> 
                    Follow Artist: https://bit.ly/3qFbTfs<br></br> 
                    Music promoted by DayDreamSound: https://youtu.be/_AtSzZdVC54 
                </div>
            </p>
            <p>
                <div className="credit_title" style={{fontSize: '200%', position: 'relative', top: '420px'}}>STAGE 2 : THE GALLARY</div>
                <div className="credit_subtitle" style={{position: 'absolute', top: '660px'}}> 
                    MAIN DEVELOPER<br></br>
                    BGM
                </div>
                <div className="credit_body" style={{position: 'absolute', top: '660px'}}>
                    황주이<br></br>
                    Spirit of the Dead - Aakash Gandhi<br></br>
                    Funeral March (by Chopin) - Chopin 
                </div>
            </p>
        </div>
    )
}

export default CreditPage