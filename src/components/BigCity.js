import React from 'react';
import classes from './BigCity.css';
import Time from './Date.js';


class BigCity extends React.Component {
    render() {
        return (
            <div>
                  {this.props.city && <p>Miasto: {this.props.city}</p>}
                <h1 className={classes.CityHeader}>KOŁOBRZEG </h1>

                <p className={classes.Paragraph}>Dzisiaj jest: <Time/></p>
                <div className={classes.Margin}>
                    <p className={classes.Paragraph}>Wschód słońca: </p>
                    <p className={classes.Paragraph}>Zachód słońca: </p>

                   
                </div>
                <p className={classes.Paragraph}>Stan powietrza: </p>

            </div>
        )
    }
}


export default BigCity;