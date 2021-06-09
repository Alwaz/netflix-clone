import axios from "../axios";
import React, { useState, useEffect } from "react";
import "../SCSS/Row.css";
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'


const base_url = `https://image.tmdb.org/t/p/original/`;

const Rows = ({ title, fetchUrl, originals }) => {
  const [movies, setMovies] = useState([]);
  const[trailerUrl, settrailerUrl]=useState("")

  // snipped of code which runs based on a specified condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // url
      autoplay: 1,
    },
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl('')
    } else{
      movieTrailer(movie?.name || "").then(url => {
        // this will capture everything after ?
        // https://www.youtube.com/watch?v=XtMThy8QKqU&t=9712s
        const urlParams = new URLSearchParams(new URL(url).search);
        settrailerUrl(urlParams.get('v'))

      }).catch((err)=> console.log(err))
    }

  }

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={()=>handleClick(movie)}
              className={`row__poster ${originals && `row__originals`}`}
              src={`${base_url}${
                originals ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })} 
      </div>

      {trailerUrl && <Youtube
      videoId={trailerUrl}
      opts={opts}  
      /> }

    </div>
  );
};

export default Rows;
