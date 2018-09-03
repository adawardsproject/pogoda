import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import classes from './BottomNav.css';


var rowStyle = {
   marginTop: "80px",
   display: "flex",
   alignItems: "flex-end",

}
var margin = {
 display: "flex",
 justifyContent:"flex-end",
 alignItems:"flex-center",
}

class BottomNav extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row style={rowStyle}>
                        <Col md={2} sm={12}>
                            <a className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Warszawa
                        </a>
                            <a className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Kraków
                        </a>
                            <a className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Łódź
                        </a>
                            <a className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Wrocław
                        </a>
                        </Col>
                        <Col md={2} sm={12}>
                            <a className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Poznań
                        </a>
                            <a className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Gdańsk
                        </a>
                            <a className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Szczecin
                        </a>
                            <a className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Bydgoszcz
                        </a>
                        </Col>
                        <Col md={3} sm={12}>
                            <a  className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Zobacz nasze serwisy
                        </a>
                            <a  className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Kontakt
                        </a>
                            <a  className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Regulamin
                        </a>
                            <a  className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Polityka cookies
                        </a>
                        </Col>
                        <Col md={3} sm={12}>
                            <a  className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Polityka prywatności
                        </a>
                            <a  className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Dla prasy
                        </a>
                            <a  className={classes.Style} href="#">
                                <span className={classes.Span}> > </span> Pogoda na Twoje WWW
                        </a>
                            <a  className={classes.Style}href="#">
                                <span className={classes.Span}> > </span> Reklama
                        </a>
                        </Col>
                        <Col md={2} sm={12} style={margin} >
                     

                        </Col>

                    </Row>
                </Grid>
            </div>
        )
    }
}

export default BottomNav;