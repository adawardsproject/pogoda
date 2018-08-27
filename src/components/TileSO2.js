import React from 'react';

var style = {
    width: '88px',
    height: '88px',
    borderRadius: '10px',
    backgroundColor:" #f31a4d",
    marginTop: "10px",
    marginLeft:"40px",

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

const TileSO2 = () => {

    return (
        <div style={style}>
        <p style={paragraphStyle}> SO2 </p>
        <p style = {dirt}>Pył zawieszony</p>


        </div>
    )
}
export default TileSO2;