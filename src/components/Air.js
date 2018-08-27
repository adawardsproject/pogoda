import React from 'react';
import Time from "./Date.js";
import AirForm from "./AirForm";
import TileCondition from "./TileCondition";
import TilePM10 from "./TilePM10";
import TilePM25 from "./TilePM25";
import TileSO2 from "./TileSO2";
import TileNO2 from "./TileNO2";
import TileCO2 from "./TileCO2";
import TileC6H6 from "./TileC6H6";
import TileO3 from "./TileO3";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';



var style = {
    fontWeight: "700",
    color: "#15629e",
    fontSize: '16px',
}
var paragraphStyle = {
    color: "#15629e",
    fontSize: '16px',
    fontWeight: "300",
}

class Air extends React.Component {
    state = {
        stationName: undefined,
        cityName: undefined,

    }

    getAir = async (e) => {


        e.preventDefault();
        const stationId = e.target.elements.city.value;

        e.preventDefault();

        const api_call = await fetch(`http://api.gios.gov.pl/pjp-api/rest/station/sensors/${stationId}`);

        const response = await api_call.json();

        console.log(response);

        this.setState({
            stationName: response.stationName,
            cityName: response.city.name,

            error: ""
        })
    }
    render() {
        return (
            <div>
                <p style={paragraphStyle}><span style={style}>Stan powietrza:</span> <Time /></p>
                <AirForm getAir={this.getAir} />
                <Grid>
               
                    <Col md={3}>
                        <Row>
                            <Col md={3}>
                                <TileCondition />

                            </Col>
                            <Col md={3}>
                                <TilePM10 />

                            </Col>
                            <Col md={3}>
                                <TilePM25 />
                            </Col>
                            <Col md={3}>
                                <TileSO2 />

                            </Col>

                        </Row>
                    </Col>
               
                </Grid>
                <Grid>
                    <Col md={3}>
                        <Row>
                            <Col md={3}>
                                <TileNO2 />
                            </Col>
                            <Col md={3}>
                                <TileCO2 />
                            </Col>
                            <Col md={3}>
                                <TileC6H6 />
                            </Col>
                            <Col md={3}>
                                <TileO3 />
                            </Col>
                        </Row>
                    </Col>






                    </Grid>




                       
                  
                       
                        
                       
                    


            </div>
                    )
            
                }
            }
            
export default Air;