import React from "react";
import { Col } from "antd";

function GridCard({ image, movieId, movieName }) {
  return (
    <Col lg={6} md={8} xs={12}>
      <div style={{ position: "relative" }}>
        <a href={`/movie/${movieId}`}>
          <img src={image} alt={movieName} style={{ width: "100%" }} />
        </a>
      </div>
    </Col>
  );
}

export default GridCard;
