import React from 'react';
const WeatherDescription = (props) => {

  return(
  
    <div>
      {props.city && <p>Miasto: {props.city}</p>}
      {props.temperature && <p>Temperatura: {props.temperature} °C</p>}
      {props.sunset && <p>Zachód: {props.sunset}</p>}
      {props.realSunrise && <p>Zachód: {props.realSunrise}</p>}
      {props.sunrise && <p>Wschód: {props.sunset}</p>}
     {props.description}
      {props.error && <p>{props.error}</p>}
    </div>
  )
}
export default WeatherDescription;