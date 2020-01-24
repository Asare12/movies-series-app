import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <Col md={3} className="mb-5">
        <Card>
          {" "}
          <Card.Img
            className="w-100 mb-2"
            src={movie.Poster}
            alt="Movie Cover"
          />
          <Card.Body>
            <Card.Title>
              {movie.Title} - {movie.Year}
            </Card.Title>
            <Button variant="primary" type="submit" className="mt-3">
              Movie Details <i className="fas fa-chevron-right" />
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default MovieCard;
