import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../commons/MainImage";
import GridCard from "../commons/GridCard";
import { Row } from "antd";

function LandingPage() {
  const [movies, setMovies] = useState([]);
  const [mainMovie, setMainMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endpoint);
  }, []);

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        setMovies([...movies, ...response.results]);
        setMainMovie(response.results[0]);
        setCurrentPage(response.page);
      });
  };

  const loadMoreMovies = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      currentPage + 1
    }`;
    fetchMovies(endpoint);
  };

  return (
    <div style={{ width: "100%", margin: "0" }}>
      {/* Main Image */}
      {mainMovie && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${mainMovie.backdrop_path}`}
          title={mainMovie.original_title}
          text={mainMovie.overview}
        />
      )}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2>Movies by latest</h2>
        <hr />
        {/* Movie Grid Cards */}
        <Row gutter={[16, 16]}>
          {movies &&
              movies.map((movie, index) => (
              <GridCard
                landingPage
                key={index}
                image={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                    : null
                }
                movieId={movie.id}
                movieName={movie.original_title}
              />
            ))}
        </Row>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={loadMoreMovies}>Load More</button>
      </div>
    </div>
  );
}

export default LandingPage;
