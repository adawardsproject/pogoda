import React from 'react';
import classes from './WeatherDetails.css';
import { Button } from 'react-bootstrap';

var imgStyle= {
    verticalAlign: "bottom",
    marginBottom: "28px"

};


class WeatherDetails extends React.Component {
    render() {
        return (      
        <div>
      
                <div className={classes.InLine}>
                    <img style={imgStyle} src={require("../img/burza.png")} />
                </div>
                <div className={classes.InLine}>
                    <p className={classes.Number}>23<sup className={classes.Sup} >°C</sup> </p>
                    <p className={classes.Paragraph}>Odczuwalna:</p>
                    <p className={classes.Paragraph}>Spodziewane burze</p>
                </div>
                <div className={classes.Center}>
                    <Button bsStyle="sectionStyle"  >Sczegóły pogody</Button>
                </div>
            </div>


        )
    }
}
export default WeatherDetails;