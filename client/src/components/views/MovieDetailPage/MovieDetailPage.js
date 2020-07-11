import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../commons/MainImage";
import MovieInfo from "./Sections/MovieInfo";
import GridCard from "../commons/GridCard";
import Favorite from "./Sections/Favorite";
import { Row } from "antd";

function MovieDetailPage({ match }) {
  let movieId = match.params.movieId;
  const [movie, setMovie] = useState([]);
  const [casts, setCasts] = useState([]);
  const [actorToggle, setActorToggle] = useState(false);

  useEffect(() => {
    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    let endpointCast = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie(response);
      });

    fetch(endpointCast)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.cast);
        setCasts(response.cast);
      });
  }, []);

  const toggleActorView = () => {
    setActorToggle(!actorToggle);
  };

  return (
    <div>
      {/* Header */}
      <MainImage
        image={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}
        title={movie.original_title}
        text={movie.overview}
      />

      {/* Body */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Favorite
            movieInfo={movie}
            movieId={movieId}
            userFrom={localStorage.getItem("userId")}
          />
        </div>

        {/* Movie Info */}
        <MovieInfo movie={movie} />

        {/* Action Grid */}
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          <button onClick={toggleActorView}>Toggle Actor View</button>
        </div>

        {actorToggle && (
          <Row gutter={[16, 16]}>
            {casts &&
              casts.map((cast, index) => (
                <GridCard
                  key={index}
                  image={
                    cast.profile_path
                      ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                      : null
                  }
                />
              ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default MovieDetailPage;
