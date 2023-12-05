/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import React from 'react';

const Card = ({ genre }) => {
  return (
    <>
      {genre.map((movie) => (
        <div className="MovVertCard" key={movie.id}>
          <img
            className="BackGroundImage"
            src={`https://image.tmdb.org/t/p/w1280${
              movie.poster_path || movie.profile_path
            }`}
            alt={movie.title || movie.name}
          />
          <img
            className="ForeGroundImg"
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt={movie.title || movie.name}
          />
          <div className="Mov-Card-Det">
            <span className="Card-Mov-Det">
              <h4 className="RelYear">
                {movie.release_date || movie.first_air_date}
              </h4>
              <h6> | </h6>
              <h4 className="Languages">{movie.original_language}</h4>
              <h6> | </h6>
              <h4 className="Rating">
                {Math.round(movie.vote_average || movie.popularity)} ★
              </h4>
            </span>
            <h2>{movie.title || movie.name}</h2>
            <p>{movie.overview}</p>
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="Links-tag"
          >
            <button className="View-More">
              More Details<span> &gt; </span>
            </button>
          </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default React.memo(Card);
