import React from 'react';
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <NavbarBs className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-3 fixed-top">
      <Container>
        {/* Navbar Brand with Text Logo */}
        <NavbarBs.Brand as={NavLink} to="/">
          <span className="logo-text">Stockhom Taxi och Åkeri</span>
        </NavbarBs.Brand>
        
        {/* Navbar Toggle Button */}
        <NavbarBs.Toggle aria-controls="navbar-nav" />
        
        {/* Navbar Collapsible Content */}
        <NavbarBs.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}
