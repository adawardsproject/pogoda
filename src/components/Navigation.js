import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import classes from './Navigation.css';




class Navigation extends React.Component {
    render () {
        return (
            <Navbar className={classes.NavbarDefault} collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand className={classes.NavbarBrand}>
           
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav className={classes.NavbarFont}>
                <NavItem eventKey={1} href="#" className={classes.NavbarFont} >
                  Prognozy
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Wiadomości
                </NavItem>
                <NavItem eventKey={3} href="#">
                  Multimedia
                </NavItem>
                <NavItem eventKey={3} href="#">
                  Wiedza
                </NavItem>
                <NavItem eventKey={3} href="#">
                  Widget
                </NavItem>

           
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
          
                <i className="fa fa-facebook-official" ></i>
                </NavItem>
                <NavItem eventKey={2} href="#">
                <i className="fa fa-twitter"></i>
                </NavItem>
                <NavItem eventKey={1} href="#">
                <i className="fa fa-google-plus"></i>
        
          </NavItem>
          <NavItem eventKey={2} href="#">
          <i className="fa fa-instagram" aria-hidden="true"></i>
          </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
export default Navigation;