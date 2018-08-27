import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import Map from './components/Map';
import Form from './components/Form';
import WeatherDescription from './components/WeatherDescription';
import Articles from './components/Articles';
import BottomNav from './components/BottomNav';


const Api_Key = "4142b41eca5d3f80b36e3771483ffdc1";




class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    sunUp:undefined,
    sunDown:undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    

    const city = e.target.elements.city.value;

    e.preventDefault();

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&lang=pl&units=metric`);
    
    const response = await api_call.json();
    
    console.log(response);

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      sunUp:response.sys.sunrise,
      sunDown:response.sys.sunset,
      realSunrise:sunrise,
      description: response.weather[0].description,
      error: ""
    })

    var sunrise = new Date(this.state.sunUp * 1000);
    var sunset = new Date(this.state.sunDown * 1000)

    console.log("Sunrise will occur at " + sunrise);
    console.log("Sunset will occur at " + sunset);



    
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            sunrise={this.state.sunUp}
            sunset= {this.state.sunDown
            }
            realSunrise={this.state.realSunrise}
            description={this.state.description}
            error={this.state.error} />
        <WeatherDescription
           temperature={this.state.temperature}
           city={this.state.city}
           sunrise={this.state.sunUp}
           sunset= {this.state.sunDown
           }
           realSunrise={this.state.realSunrise}
           description={this.state.description}
           error={this.state.error} 
        />
        
  
        <Form getWeather={this.getWeather}/>
        <Forecast />
        <Map />
        <Articles />
        <BottomNav />

      </div>
    );
  }
}

export default App;
