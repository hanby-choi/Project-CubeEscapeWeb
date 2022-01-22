import React from 'react'

function LandingPage() {
    return (
        <div className="Landing" style={{
            height: '800px', display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            color: 'red', fontSize: '70px'
        }}>
            <div> CUBE ESCAPE : DEATH GAME </div>
            <img src="/images/cube.png" width="500" height="500"></img>
            <div> Will You Join the Game? </div>  

        </div>
        //<div style={{ float: 'right' }}>Thanks For Using This Boiler Plate by John Ahn</div>
    )
}

export default LandingPage
