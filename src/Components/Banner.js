import React, { useState, useEffect } from "react";
import "../SCSS/Banner.css";
import axios from "../axios";
import request from "../request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncateString(str, num) {
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* 2 buttons */}
        <div className="banner__btns">
          <button className="banner__btn">Play</button>
          <button className="banner__btn">My List</button>
        </div>

        <h1 className="banner__description">
          {truncateString(movie?.overview, 150)}
        </h1>
      </div>

      <div className='banner__fadebottom'>
        
      </div>
    </header>
  );
};

export default Banner;
