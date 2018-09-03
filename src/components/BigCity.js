import React from 'react';
import classes from './BigCity.css';
import Time from './Date.js';


const BigCity = (props) =>{


  
        return (
            <div>
                <h1 className={classes.CityHeader}>{props.city} </h1>

                <p className={classes.Paragraph}>Dzisiaj jest: <Time/></p>
                <div className={classes.Margin}>

                <p className={classes.Paragraph}>Wschód słońca: {props.wschod} </p>
                    <p className={classes.Paragraph}>Zachód słońca:  {props.zachod}</p>

                   
                </div>
                <p className={classes.Paragraph}>Stan powietrza: </p>

            </div>
        )
    }



export default BigCity;