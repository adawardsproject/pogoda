import React from 'react';
import classes from './WeatherDetails.css';


var imgStyle = {
    verticalAlign: "bottom",
    marginBottom: "28px"

};
var style = {
    backgroundColor: "#ffc43c",
    color: "#176bac",
    border: "none",
    height: "39px",
    width: "192px",
    fontSize: "16px",
    fontWeight: "400",
    marginTop: "30px",

}


const WeatherDetails = (props) => {

    return (
        <div>

            <div className={classes.InLine}>
                <img style={imgStyle} src={require("../img/burza.png")} />
            </div>
            <div className={classes.InLine}>
                <p className={classes.Number}>23<sup className={classes.Sup} >°C</sup> </p>
                <p className={classes.Paragraph}>Odczuwalna:      <p> {props.temperature}</p></p>
                <p className={classes.Paragraph}>Spodziewane burze</p>
            </div>
            <div className={classes.Center}>
                <button style={style} >Sczegóły pogody</button>
            </div>
        </div>


    )
}

export default WeatherDetails;