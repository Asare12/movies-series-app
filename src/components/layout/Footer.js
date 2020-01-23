import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function footer() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="bottom"
      className="p-3 mt-4 text-light"
    >
      <Container>
        <Row className="text-center">
          <Col md="12">
            Developed By:
            <span className="text-warning"> David Asare</span>
            , Using <i className="fab fa-react" id="react-logo" /> React JS
            &amp; Redux JS integrated with external movies data API{" "}
            <a href="http://www.omdbapi.com/" target="blank">
              OMDB{" "}
            </a>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
