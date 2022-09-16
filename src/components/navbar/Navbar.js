import React from 'react';

import Container from 'react-bootstrap/Container';  
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./Navbar.css"

function NavBar() {
  return (

    <>
      
      <Navbar className="navbar" expand="lg">
        <Container className="unpadding" fluid>

          <Navbar.Brand className="nav-title" href="/">MUSEO</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link className="nav-link" href="/Maps">Mapas</Nav.Link>
              <Nav.Link className="nav-link" href="/Exhibitions">Exhibiciones</Nav.Link>
              <Nav.Link className="nav-link" href="/Guided-Visits">Visitas Guiadas</Nav.Link>
              <Nav.Link className="nav-link" href="/About-Us">Sobre Nosotros</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>

  );
};

export default NavBar;
