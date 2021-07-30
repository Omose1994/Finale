import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';


class TopNav extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="/">Ebook Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/admin">Admin</Nav.Link>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div> );
    }
}
 
export default TopNav;