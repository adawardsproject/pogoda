import React from 'react';
import classes from './WeatherDetails.css';

class Overmorrow extends React.Component {
    render() {
        return (
            <div className={classes.Center}>
                <img className={classes.Veritcal} src={require("../img/sun.png")} />
                <p className={classes.CelsiusPargraph}>23<sup className={classes.SupSmall}>°C</sup> - 27<sup className={classes.SupSmall}>°C</sup> </p>
                <p className={classes.ParagraphNoMargin}>Słonecznie</p>
                <p className={classes.ParagraphNoMargin}>Jutro</p>
                

          
            </div>
        )
    }
}

export default Overmorrow;