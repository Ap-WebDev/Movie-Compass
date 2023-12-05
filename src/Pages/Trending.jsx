import MovVertCol from "../components/MovVertCol"
import Trendall from "../components/Trendall";
import { useEffect, useState } from "react";
import axios from "axios";

const Trending = () => {
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState([]);


  const Genres = ["movie","person","tv","all"];

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "15074d7bf5380ec4579be33a91d596b5";
      const movieGenre = [];

      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
        );
        for (let gen of Genres) {
          const response = await axios.get(
            `https://api.themoviedb.org/3/trending/${gen}/day?api_key=${apiKey}`
        );
        movieGenre.push({ genre: gen, data: response.data.results });
        // console.log(movieGenre)
      }
      setGenres(movieGenre);
      setMovie(response.data);
    };

    fetchData();
  }, []);

  if (!movie) return null;

  return (
    <>
      <div className="Home-Page">
        <Trendall key={6000} movie={movie} />
        <div>
        {genres.map((genre, index) => (
          <MovVertCol key={genre.genre} index={index} genre={genre} />
        ))}
        </div>
      </div>
    </>
  );
};

export default Trending;
