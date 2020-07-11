import React from "react";

function MainImage({ image, title, text }) {
  return (
    <div
      style={{
        height: "500px",
        backgroundColor:
          "linear-gradient(to bottom, rgba(0,0,0,0) 39%,rgba(0,0,0,0) 41%,rgba(0,0,0,0.65) 100%)",
        backgroundImage: `url(${image})`,
        backgroundSize: "100%, cover",
        backgroundPosition: "center, center",
        width: "100%",
        position: "relative",
      }}
    >
      <div>
        <div
          style={{
            position: "absolute",
            maxWidth: "500px",
            bottom: "2rem",
            marginLeft: "2rem",
          }}
        >
          <h2 style={{ color: "white" }}>{title}</h2>
          <p style={{ color: "white", fontSize: "1rem" }}>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
