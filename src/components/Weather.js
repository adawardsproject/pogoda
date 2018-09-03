import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import Form from './Form';
import WeatherDetails from './WeatherDetails';
import BigCity from './BigCity';
import Tomorrow from './Tomorrow';
import Overmorrow from './Overmorrow';

import image from '../img/weather-background.png';
import classes from './Weather.css';

var sectionStyle = {
    backgroundImage: 'url(' + image + ')',
    width: '100%',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '30px',
};
var rowStyle = {
    marginTop: "30px",
}

const Api_Key = "4142b41eca5d3f80b36e3771483ffdc1";

class Weather extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        sunUp: undefined,
        sunDown: undefined,
        description: undefined,
        windSpeed: undefined,
        wind_chill: '',
        wschod: undefined,
        zachod: undefined,
        error: undefined,
        temperatureRound:undefined
    }

    getWeather = async (e) => {

        const city = e.target.elements.city.value;

        e.preventDefault();

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&lang=pl&units=metric`);

        const response = await api_call.json();

        var wind = response.wind.speed;
        var kilometers = wind * 3.6;
        var temp = response.main.temp;

        var wind_chill_1 = 13.12 + 0.6215 * temp - 11.37 * Math.pow(kilometers, 0, 16) + 0.3965 * Math.pow(kilometers, 0, 16);

        var wind_chill_round = Math.round(wind_chill_1);


        var wschod = new Date(response.sys.sunrise * 1000);


        var mainUp = wschod.getHours() + ":" + wschod.getMinutes()
        console.log(mainUp)

        var zachod = new Date(response.sys.sunset * 1000);


        var mainDown = zachod.getHours() + ":" + zachod.getMinutes()
        console.log(mainDown)

        var temperatureRound = Math.round(response.main.temp);


        this.setState({
            temperature: response.main.temp,
            wind_chill: wind_chill_round,
            city: response.name,
            sunUp: response.sys.sunrise,
            sunDown: response.sys.sunset,
            zachod: mainDown,
            wschod: mainUp,
            windSpeed: response.wind.speed,
            description: response.weather[0].description,
            temperatureRound: temperatureRound,
            error: ""
        })
    }
    

    render() {
        return (
            <section style={sectionStyle}>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={3} mdOffset={1}>
                        </Col>
                        <Col xs={12} md={3}>
                            <Form getWeather={this.getWeather}
                           />
                        </Col>
                    </Row>
                    <Row className="show-grid" style={rowStyle}>
                        <Col xs={12} md={3} >
                            <BigCity
                                temperature={this.state.temperature}
                                city={this.state.city}
                                wschod={this.state.wschod}
                                zachod={this.state.zachod}
                                description={this.state.description}
                                error={this.state.error}
                            />
                        </Col>
                        <Col xs={12} md={4}>
                            <WeatherDetails
                                temperature={this.state.temperature}
                                city={this.state.city}
                                sunrise={this.state.sunUp}
                                sunset={this.state.sunDown
                                }
                                realSunrise={this.state.realSunrise}
                                description={this.state.description}
                                windSpeed={this.state.windSpeed}
                                error={this.state.error}
                                wind_chill={this.state.wind_chill}
                                temperatureRound={this.state.temperatureRound}

                            />

                        </Col>
                        <Col xs={12} md={3}>
                            <Tomorrow
                              
                                description={this.state.description}
                                error={this.state.error}
                            />


                        </Col>
                        <Col xs={12} md={2}>
                            <Overmorrow
                         
                                description={this.state.description}
                                error={this.state.error}
                            />


                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }


}

export default Weather;
