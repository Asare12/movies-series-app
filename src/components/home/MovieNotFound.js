import React from "react";
import { Col } from "react-bootstrap";

function MovieNotFound() {
  return (
    <Col md="12">
      <div className="text-center">
        <h1>Movie not found! Try again...</h1>
      </div>
    </Col>
  );
}

export default MovieNotFound;
