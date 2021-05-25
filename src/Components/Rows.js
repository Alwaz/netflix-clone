import axios from "../axios";
import React, { useState, useEffect } from "react";
import "../SCSS/Row.css";

const base_url = `https://image.tmdb.org/t/p/original/`;

const Rows = ({ title, fetchUrl, originals }) => {
  const [movies, setMovies] = useState([]);

  // snipped of code which runs based on a specified condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row__poster ${originals && `row__originals`}`}
              src={`${base_url}${
                originals ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rows;
