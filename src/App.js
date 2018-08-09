import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import Map from './components/Map';
import Form from './components/Form';


const Api_Key = "4142b41eca5d3f80b36e3771483ffdc1";




class App extends Component {
  getWeather = async (e) => {
    const city = e.target.elements.city.value;

    e.preventDefault();

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`);
    
    const response = await api_call.json();
    
    console.log(response);
    
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Weather />
        <Form getWeather={this.getWeather}/>
        <Forecast />
        <Map />

      </div>
    );
  }
}

export default App;
