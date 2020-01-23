import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { searchMovie } from "../../actions/searchAction";
import { connect } from "react-redux";

export class SearchhForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };
  render() {
    return (
      <Jumbotron fluid className="mt-5 text-center">
        <Container>
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a Movie, TV series ...
          </h1>
          <Form>
            <Form.Control
              type="text"
              placeholder="Search for a Movie, TV series ...."
              onChange={this.onChange}
            />
            <Button variant="primary" size="lg" className="mt-3">
              Search
            </Button>
          </Form>
        </Container>
      </Jumbotron>
    );
  }
}

const mapStatesToProps = state => ({
  text: state.movies.text
});

export default connect(mapStatesToProps, { searchMovie })(SearchhForm);
