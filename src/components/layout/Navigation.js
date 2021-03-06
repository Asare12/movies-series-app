import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" className="text-light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home" className="brand-text">
            Movies & Series Info
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#">
              <span className="fab fa-imdb fa-5x" id="imdb-logo" />
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fab fa-react fa-5x" id="react-logo" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
