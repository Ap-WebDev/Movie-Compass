import { useState, useEffect } from "react";

const TopMovDet = ({ movie }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  // console.log(movie)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movie.results.length);
    }, 8000); // Change the interval to adjust the auto-switching speed (in milliseconds)
  
    return () => clearInterval(intervalId);
  }, [movie.results.length]);
  
  const currentMovie = movie.results[currentMovieIndex];

  return (
    <div className="InDetails">
      <img
      src={`https://image.tmdb.org/t/p/w1280${currentMovie.backdrop_path}`}
        alt={currentMovie.title}
      />

      <div>
        <h1>{currentMovie.title}</h1>
        <span className="RelDur-Det">
          <h4 className="RelYear">{currentMovie.release_date.split("-")[0]}</h4>
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

export default TopMovDet;
