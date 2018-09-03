import React from 'react';

var style = {
    width: '88px',
    height: '88px',
    borderRadius: '10px',
    backgroundColor:" #ff9600",
    display: "inline-block"
  
}
var paragraphStyle = {
    fontSize: '10px',
    color: '#fff',
    textAlign: "center",



}

const TileCondition = () => {

    return (
        <div style={style} className="col-md-3">
        <p style={paragraphStyle}> Stan<br/> powietrza: </p>


        </div>
    )
}
export default TileCondition;
