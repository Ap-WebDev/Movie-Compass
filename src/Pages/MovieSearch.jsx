import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../styles/search.css";

const MovieSearch = ({ apiKey }) => {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

  const handleInputChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleSearch = async () => {
    const apiKey = "15074d7bf5380ec4579be33a91d596b5";
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Failed to fetch movies", error);
    }
  };

  return (
    <div className="MovieSearch">
      <div>
        <div className="form__group field">
          <input
            type="input"
            value={movieName}
            onChange={handleInputChange}
            className="form__field"
            placeholder="Enter Movie Name"
            required=""
          />

          <button onClick={handleSearch}>Search</button>
        </div>
        {movies.map((movie) => (
          <div key={movie.id} className="MoviesList">
            <img
              className="ForImg"
              src={`https://image.tmdb.org/t/p/w1280${
                movie.poster_path || movie.profile_path
              }`}
              alt={movie.title || movie.name}
            />
            <img
              className="Bacimg"
              src={`https://image.tmdb.org/t/p/w1280${
                movie.backdrop_path
              }`}
              alt={movie.title || movie.name}
            />
            <span>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
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
              <Link
                to={`/movie/${movie.id}`}
                key={movie.id}
                className="Links-tag"
              >
                <button className="View-More">
                  View More<span> &gt; </span>
                </button>
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
