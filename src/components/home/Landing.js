import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import SearchForm from "./SearchhForm";

export class Landing extends Component {
  render() {
    return (
      <Container>
        <SearchForm />
      </Container>
    );
  }
}

export default Landing;
