import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Button } from "antd";

function Favorite({ movieId, userFrom, movieInfo }) {
  const movieTitle = movieInfo.title;
  const moviePost = movieInfo.backdrop_path;
  const movieRunTime = movieInfo.runtime;

  const [favoriteNumber, setFavoriteNumber] = useState(0);
  const [favorited, setFavorited] = useState(false);

  let variables = {
    userFrom, // 누가 Favorite 눌렀는지
    movieId,
    movieTitle,
    moviePost,
    movieRunTime,
  };

  useEffect(() => {
    Axios.post("/api/favorite/favoriteNumber", variables).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setFavoriteNumber(response.data.favoriteNumber);
      } else {
        alert("favorite 숫자를 가져오는 데 실패했습니다.");
      }
    });
    Axios.post("/api/favorite/favorited", variables).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setFavorited(response.data.favorited);
      } else {
        alert("favorite 했는지 정보를 가져오는 데 실패했습니다.");
      }
    });
  }, []);

  const onClickFavorite = () => {
    if (favorited) {
      Axios.post("/api/favorite/removeFromFavorite", variables).then(
        (response) => {
          if (response.data.success) {
            console.log(response.data);
            setFavoriteNumber(favoriteNumber - 1);
            setFavorited(!favorited);
          } else {
            alert("favorite 리스트에서 삭제를 실패했습니다.");
          }
        }
      );
    } else {
      Axios.post("/api/favorite/addToFavorite", variables).then((response) => {
        if (response.data.success) {
          console.log(response.data);
          setFavoriteNumber(favoriteNumber + 1);
          setFavorited(!favorited);
        } else {
          alert("favorite 리스트에 추가를 실패했습니다.");
        }
      });
    }
  };

  return (
    <div>
      <Button onClick={onClickFavorite}>
        {favorited ? "Favorited" : "Add to Favorite"} {favoriteNumber}
      </Button>
    </div>
  );
}

export default Favorite;
