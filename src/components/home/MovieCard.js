import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <Col md={3} className="mb-5">
        <Card bg="dark" text="white" className="text-center h-100">
          {" "}
          <Card.Body>
            {" "}
            <Card.Img
              className="w-100 mb-2"
              src={movie.Poster}
              alt="Movie Cover"
            />
            <Card.Title>
              {movie.Title} - {movie.Year}
            </Card.Title>
            <Link className="btn btn-primary" to={"/movie/" + movie.imdbID}>
              Movie Details <i className="fas fa-chevron-right" />
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default MovieCard;
