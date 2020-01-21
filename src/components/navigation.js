import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function navigation() {
  return (
    <Navbar bg="dark" variant="dark" className="text-light">
      <Container>
        <Navbar.Brand href="#home">Movies & Series Info</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link href="#">
              <span className="fab fa-imdb fa-5x" />
            </Nav.Link>
            <Nav.Link href="#">
              <i className="fab fa-react fa-5x" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
