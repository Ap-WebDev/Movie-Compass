import { useState, useEffect } from "react";

const Trendall = ({ movie }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  // console.log(movie)
  useEffect(() => {
    if (movie && movie.results) {
      const intervalId = setInterval(() => {
        setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movie.results.length);
      }, 8000);
    
      return () => clearInterval(intervalId);
    }
  }, [movie]);

  if (!movie || !movie.results) return null;

  const currentMovie = movie.results[currentMovieIndex];

  return (
    <div className="InDetails">
      <img
      src={`https://image.tmdb.org/t/p/w1280${currentMovie.backdrop_path}`}
        alt={currentMovie.title}
      />

      <div>
        <h2>{ currentMovie.title || currentMovie.name}</h2>
        <span className="RelDur-Det">
        <h4 className="RelYear">{ currentMovie.release_date || currentMovie.first_air_date}</h4>
          <h6> | </h6>
          <h4 className="Languages">{currentMovie.original_language}</h4>
          <h6> | </h6>
          <h4 className="Rating">{currentMovie.vote_average}U/A</h4>
        </span>

        <p className="Abt-Mov">{currentMovie.overview}</p>
      </div>
    </div>
  );
};

export default Trendall;
