import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';

import Article from './Article';
import Article2 from './Article2';
import Article3 from './Article3';
import Article4 from './Article4';
import Article5 from './Article5';
import Article6 from './Article6';

var style = {
    paddingTop:"4%"
}


const Articles = () => {

    return (
        <div >
            <Grid>
                <Col md={9} sm={12}>
                    <Row style={style}>
                        <Col md={4} sm={12}>

                            <Article />
                        </Col>
                        <Col md={4} sm={12}>
                            <Article2 />
                        </Col>
                        <Col md={4} sm={12}>
                            <Article3 />
                        </Col>
                    </Row>
                    <Row style={style}>
                        <Col md={4} sm={12}>

                            <Article4 />
                        </Col>
                        <Col md={4} sm={12}>
                            <Article5 />
                        </Col>
                        <Col md={4} sm={12}>
                            <Article6 />
                        </Col>
                    </Row>

                </Col>
            </Grid>


   

        </div>
                    )
                }
export default Articles;