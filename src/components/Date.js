import React from 'react';
import classes from './WeatherDetails.css';

class Time extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div  className={classes.InLine}>
            {this.state.date}
            </div>
        );
    }
}
export default Time;