import React from 'react';
import image from '../img/poland-map.png';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import Example from "./DatePicker";
import WeatherList from "./WeatherList";
import Air from "./Air";



import classes from './WeatherDetails.css';

var sectionStyle = {
    backgroundImage: 'url('+image+')',
    width:'100%',
    height:'550px',
    backgroundSize:'cover',
    backgroundPosition:'center',
    paddingTop: '30px',
    backgroundReapeat:'no-repeat'
};

class Map extends React.Component {
    render() {
        return (
            <Grid>
            <Row className="show-grid">
                <Col xs={12} md={6} >
                    <div  style = { sectionStyle }></div>
                </Col>
                <Col xs={12} md={3}>
                <Example/>
                <WeatherList/>
           
          
        
                </Col>
                <Col xs={12} md={3}>
                <Air/>
                </Col>

            </Row>
        </Grid>


        )


    }
}

export default Map;