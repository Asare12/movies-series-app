import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import SearchForm from "./SearchForm";
import MoviesContainer from "./MovieContainer";
import Spinner from "../layout/Spinner";
import { connect } from "react-redux";

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <Container>
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.movies.loading
});
export default connect(mapStateToProps)(Landing);
