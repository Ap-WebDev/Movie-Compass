import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../Pages/Movies";

const MovDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=15074d7bf5380ec4579be33a91d596b5`
      )
      .then((response) => {
        setMovie(response.data);
      });
  }, [id]);
  // console.log(movie);

  return (
    movie && (
      <div className="MovDetails">
        <div>
          <img
            className="PosImg"
            src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
            alt={movie.title}
          />
          <img
            className="BacImg"
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            alt={movie.title}
          />
          <span>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>
              <strong>Genres:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Original Language:</strong> {movie.original_language}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average} ★
            </p>
            <a href={movie.homepage}>Visit Official Website</a>
          </span>
        </div>
      </div>
    )
  );
};

export default MovDetails;
