import React from 'react';
import classes from './BigCity.css';

class BigCity extends React.Component {
    render() {
        return (
            <div>
                <h1 className={classes.CityHeader}>KOŁOBRZEG </h1>

                <p className={classes.Paragraph}>Dzisiaj jest: </p>
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