import React from 'react';

var style = {
    width: '88px',
    height: '88px',
    borderRadius: '10px',
    backgroundColor:"#24c513",
    display: "inline-block"
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
}


const TileN02 = () => {

    return (
        <div style={style} className="col-md-3">
               <p style={paragraphStyle}> NO2 </p>
        <p style = {dirt}>Pył zawieszony</p>


        </div>
    )
}
export default TileN02;