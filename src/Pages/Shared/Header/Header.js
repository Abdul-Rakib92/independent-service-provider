import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Muscle Stone <small><span className="web-title">Personal Coach</span></small></Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="home#services">Services</Nav.Link>

      <Nav.Link href="home#contact">Contact</Nav.Link>
      
    </Nav>

    <Nav>
      <Nav.Link as={Link} to="about">About</Nav.Link>

      <Nav.Link as={Link} to="login">
        Login
      </Nav.Link>

    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
};

export default Header;
