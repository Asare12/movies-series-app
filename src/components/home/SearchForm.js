import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { searchMovie, fetchMovies } from "../../actions/searchAction";
import { connect } from "react-redux";

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
  };
  render() {
    return (
      <Jumbotron fluid className="mt-5 text-center">
        <Container>
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a Movie, TV series ...
          </h1>
          <form onSubmit={this.onSubmit}>
            <Form.Control
              type="text"
              name="searchText"
              placeholder="Search for a Movie, TV series ...."
              onChange={this.onChange}
            />
            <Button variant="primary" size="lg" type="submit" className="mt-3">
              Search
            </Button>
          </form>
        </Container>
      </Jumbotron>
    );
  }
}

const mapStatesToProps = state => ({
  text: state.movies.text
});

export default connect(mapStatesToProps, { searchMovie, fetchMovies })(
  SearchForm
);
