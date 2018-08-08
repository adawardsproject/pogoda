import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Weather from './components/Weather';


const Api_Key = "4142b41eca5d3f80b36e3771483ffdc1";




class App extends Component {
  getWeather = async (e) => {
    e.preventDefault();

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`)
    
    const response = await api_call.json();
    
    console.log(response);
    
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Weather />

      </div>
    );
  }
}

export default App;
