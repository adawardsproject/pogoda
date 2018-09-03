import React from 'react';
import classes from './WeatherDetails.css';

class Time extends React.Component {
    constructor() {
        super();

        var MyDate = new Date();
        var MyDateString;
        
        MyDate.setDate(MyDate.getDate() );
        
        MyDateString = ('0' + MyDate.getDate()).slice(-2) + '.'
                     + ('0' + (MyDate.getMonth()+1)).slice(-2) + '.'
                     + MyDate.getFullYear();

        this.state = {
            date: MyDateString
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