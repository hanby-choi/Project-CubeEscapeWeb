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
            
        </div>
    )
}

export default CreditPage