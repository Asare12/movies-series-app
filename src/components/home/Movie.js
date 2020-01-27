import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovie, setLoading } from "../../actions/searchAction";
import Spinner from "../layout/Spinner";

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;
    let movieInfo = (
      <Container>
        <Row className="mt-5">
          <Col md={4}>
            <Card>
              <Card.Img src={movie.Poster} className="thumbnail" alt="Poster" />
            </Card>
          </Col>
          <Col md={8}>
            <h2 className="mb-4">{movie.Title}</h2>
            <ListGroup>
              <ListGroup.Item>
                <strong>Genre:</strong> {movie.Genre}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Released:</strong> {movie.Released}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Rated:</strong> {movie.Rated}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Writer:</strong> {movie.Writer}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Actors:</strong> {movie.Actors}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Card bg="dark" text="white">
            <Col md={12}>
              <h3>About</h3>
              {movie.Plot}
              <hr />
              <a
                href={"http:/www.imdb.com/title/" + movie.imdbID}
                className="btn btn-primary"
              >
                View on IMDB
              </a>
              <Link to="/" className="btn btn-success text-light">
                Go Back To Search
              </Link>
            </Col>
          </Card>
        </Row>
      </Container>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);
