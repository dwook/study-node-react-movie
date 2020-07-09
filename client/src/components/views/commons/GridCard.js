import React from "react";
import { Col } from "antd";

function GridCard({ image, movieId, movieName }) {
  return (
    <Col lg={6} md={8} xs={12}>
      <div style={{ position: "relative" }}>
        <a href={`/movie/${movieId}`}>
          <div
            style={{
              width: "100%",
              paddingTop: "150%",
              background: `url('${image}')`,
              backgroundSize: "100%, cover",
              backgroundPosition: "center, center",
            }}
          />
        </a>
      </div>
    </Col>
  );
}

export default GridCard;
