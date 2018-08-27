import React from 'react';
import classes from "./WeatherList.css";


class WeatherList extends React.Component {
    render() {
        return ( 
            <div>
            <a href="#" className={classes.Style1} >WYBIERZ ZJAWISKO</a>
            <a href="#" className={classes.Style}>Temperatura</a>
            <a href="#" className={classes.Style}>Temperatura odczuwalna</a>
            <a href="#" className={classes.Style}>Zachmurzenie</a>
            <a href="#" className={classes.Style}>Prędkość wiatru</a>
            <a href="#" className={classes.Style}>Porywy wiatru</a>
            <a href="#" className={classes.Style}>Kierunek wiatru</a>
            <a href="#" className={classes.Style}>Suma opadów</a>
            <a href="#" className={classes.Style}>Wilgotność</a>
            <a href="#" className={classes.Style}>Ciśnienie</a>
            <a href="#" className={classes.Style}>Termika</a>
            <a href="#" className={classes.Style}>Biomet</a>
            <a href="#" className={classes.Style}>Słońce wschód/zachód</a>
            <a href="#" className={classes.Style}>Księżyc wschód/zachód</a>
            <a href="#" className={classes.Style}>Długość dnia/nocy</a>
            </div>

        )
    }
}
export default WeatherList;