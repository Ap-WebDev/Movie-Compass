/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import React from 'react';

const MovCard = ({ movie }) => {
  return (
    <>
      {movie.map((movieData) => (
        <div className="MovHorCard" key={movieData.id}>
          <img
            src={`https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}`}
            alt={movieData.title}
          />

          <span className="Mov-Card-Det">
            <h2>{movieData.title}</h2>
            <Link
              to={`/movie/${movieData.id}`}
              className="Links-tag"
            >
              <button className="View-More">
                More Details<span> &gt; </span>
              </button>
            </Link>
          </span>
        </div>
      ))}
    </>
  );
};

export default React.memo(MovCard);
