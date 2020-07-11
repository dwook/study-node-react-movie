import React from "react";
import { Col } from "antd";

function GridCard({ image, movieId, landingPage }) {
  if (landingPage) {
    return (
      <Col lg={6} md={8} xs={12}>
        <div style={{ position: "relative" }}>
          <a href={`/movie/${movieId}`}>
            <div
              style={{
                width: "100%",
                paddingTop: "150%",
                backgroundImage: `url('${image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center, center",
              }}
            />
          </a>
        </div>
      </Col>
    );
  } else {
    return (
      <Col lg={6} md={8} xs={12}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              width: "100%",
              paddingTop: "150%",
              backgroundImage: `url('${image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center, center",
            }}
          />
        </div>
      </Col>
    );
  }
}

export default GridCard;
