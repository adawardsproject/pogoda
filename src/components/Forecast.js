import React from 'react';
import classes from './Forecast.css';


class Forecast extends React.Component {
    render() {
        return (
            <div className={classes.OrangeLine}>
                <ul className={classes.List}>
                    <li>
                    <a href="#" className={classes.ForecastParagraphSpan}><span>PROGNOZA</span></a>
                     </li>
                     <li>
                    <a href="#" className={classes.ForecastParagraph}>OGÓLNA</a>
                    </li>
                    <li>
                    <a href="#" className={classes.ForecastParagraph}> GODZINOWA</a>
                    </li>
                    <li>
                    <a href="#" className={classes.ForecastParagraph}> 16 DNIOWA</a>
                    </li>
                    <li>
                    <a href="#" className={classes.ForecastParagraph}> MAPA</a>
                    </li>
                    <li>
                    <a href="#" className={classes.ForecastParagraph}> POWIETRZE</a>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Forecast;