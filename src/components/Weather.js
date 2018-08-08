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
    backgroundImage: 'url('+image+')',
    width:'100%',
    height:'400px',
    backgroundSize:'cover',
    backgroundPosition:'center',
    paddingTop: '30px',
};
var rowStyle = {
    marginTop: "30px",
}




class Weather extends React.Component {
    render() {
        return (
            <section style = { sectionStyle }>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={3} mdOffset={1}>
                        <p className={classes.Paragraph}>Sprawdź pogodę w swoim mieście</p>
                    </Col>
                    <Col xs={12} md={3}>
                    <Form loadWeather={this.getWeather} />
                    </Col>
                </Row>

                <Row className="show-grid" style={rowStyle}>
                    <Col xs={12} md={3} >
                       <BigCity/>
                    </Col>
                    <Col xs={12} md={4}>
                      <WeatherDetails/>
                    </Col>
                    <Col xs={12} md={3}>
                     <Tomorrow/>
                    </Col>
                    <Col xs={12} md={2}>
                     <Overmorrow/>
                     </Col>
                </Row>
            </Grid>
        </section>
        )
    }
}




export default Weather;