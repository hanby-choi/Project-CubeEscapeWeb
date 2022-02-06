import React from "react";

function Credit(props){
    return(
        <div style={{marginTop: '10px', display: 'flex',
            flexDirection: 'row', justifyContent: 'flex-start', 
            fontFamily: 'NotoSerifKR', fontSize: '120%',
            textAlign: 'left', whiteSpace: 'pre-line'}}>
            <span style={{color: 'gray'}}>{props.creditTitle}</span>
            <span style={{color: 'white', paddingLeft: '20px'}}>{props.creditBody}</span>
        </div>
    )
}

export default Credit;