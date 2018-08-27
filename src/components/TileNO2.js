import React from 'react';

var style = {
    width: '88px',
    height: '88px',
    borderRadius: '10px',
    backgroundColor:"#24c513",
    marginLeft: "-30px",
    marginTop: "10px",
    marginBottom: "10px",
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


const TileN02 = () => {

    return (
        <div style={style}>
               <p style={paragraphStyle}> NO2 </p>
        <p style = {dirt}>Pył zawieszony</p>


        </div>
    )
}
export default TileN02;