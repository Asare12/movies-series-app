import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovie } from "../../actions/searchAction";

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img src="movie-poster" className="thumbnail" alt="Poster" />
            </Card>
          </Col>
          <Col md={8}>
            <h2 className="mb-4">Movie title</h2>
            <ListGroup>
              <ListGroup.Item>
                <strong>Genre:</strong>Movie Genre
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Released:</strong>Movie Released
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Rated:</strong>Movie Rated
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>IMDB Rating:</strong>Movie IMDB Rating
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Writer:</strong>Movie Writer
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Actors:</strong>Movie Actors
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Card>
            <Col md={12}>
              <h3>About</h3>
              About the Movie
              <hr />
              <Link className="btn btn-primary">View on IMDB</Link>
              <Link className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </Col>
          </Card>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(mapStateToProps, { fetchMovie })(Movie);
