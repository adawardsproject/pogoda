import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import Form from './Form';
import BigCity from './BigCity';
import image from '../img/weather-background.png';
import classes from './Weather.css';

var sectionStyle = {
    backgroundImage: 'url('+image+')',
    width:'100%',
    height:'300px',
    backgroundSize:'cover',
    backgroundPosition:'center',
    paddingTop: '80px',
};




class Weather extends React.Component {
    render() {
        return (
            <section style = { sectionStyle }>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={3}>
                        <p className={classes.Paragraph}>Sprawdź pogodę w swoim mieście</p>
                    </Col>
                    <Col xs={12} md={4}>
                    <Form loadWeather={this.getWeather} />
                    </Col>
                </Row>

                <Row className="show-grid">
                    <Col xs={6} md={4}>
                       <BigCity/>
                    </Col>
                    <Col xs={6} md={4}>
                        <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                    </Col>
                    <Col xs={6} md={4}>
                        <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
                    </Col>
                </Row>
            </Grid>
        </section>
        )
    }
}




export default Weather;