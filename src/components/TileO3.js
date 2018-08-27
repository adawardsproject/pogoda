import React from 'react';

var style = {
    width: '88px',
    height: '88px',
    borderRadius: '10px',
    backgroundColor:"#60d709",
    marginTop: "10px",
    marginLeft: "40px",
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


const TileO3 = () => {

    return (
        <div style={style}>
        <p style={paragraphStyle}> O3 </p>
        <p style = {dirt}>Pył zawieszony</p>



        </div>
    )
}
export default TileO3;