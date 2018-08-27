import React from 'react';

var style = {
    width: '88px',
    height: '88px',
    borderRadius: '10px',
    backgroundColor:"#ffc43c",
    marginTop: "10px",
    marginRight: "10px",
}
var paragraphStyle = {
    fontSize: '20px',
    color: '#fff',
    textAlign: "center",
    paddingTop:"14px",
}
var dirt = {
    fontSize:"10px",
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
    paddingTop: "14px"
}

const TileC02 = () => {

    return (
        <div style={style}>
        <p style={paragraphStyle}> CO2 </p>
        <p style = {dirt}>Pył zawieszony</p>


        </div>
    )
}
export default TileC02;