import React from 'react';

var style = {
    width: '88px',
    height: '88px',
    borderRadius: '10px',
    backgroundColor:" #ff9600",
    marginLeft: "-30px",
    marginTop: "10px",
  
}
var paragraphStyle = {
    fontSize: '10px',
    color: '#fff',
    textAlign: "center",
    paddingTop:"14px",


}

const TileCondition = () => {

    return (
        <div style={style}>
        <p style={paragraphStyle}> Stan<br/> powietrza: </p>


        </div>
    )
}
export default TileCondition;
