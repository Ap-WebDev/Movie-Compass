import MovCol from "../components/MovCol";
import MovVertCol from "../components/MovVertCol";
import TopMovDet from "../components/TopMovDet";
import { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
  const Genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },

    {
      id: 80,
      name: "Crime",
    },

    {
      id: 18,
      name: "Drama",
    },

    {
      id: 14,
      name: "Fantasy",
    },

    {
      id: 27,
      name: "Horror",
    },

    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
  ];

  const CateGories = ["now_playing", "popular", "top_rated", "upcoming"];

  const [movie, setMovie] = useState(null);
  const [other, setOther] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "15074d7bf5380ec4579be33a91d596b5";
      const movieData = [];
      const movieGenre = [];

      const trendingResponse = axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
      );

      const categoryRequests = CateGories.map((category) =>
        axios.get(
          `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}`
        )
      );

      const genreRequests = Genres.map((gen) =>
        axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${gen.id}`
        )
      );

      const [trendingData, ...categoryData] = await Promise.all([
        trendingResponse,
        ...categoryRequests,
      ]);

      const genreData = await Promise.all(genreRequests);

      setMovie(trendingData.data);

      categoryData.forEach((response, index) => {
        movieData.push({
          category: CateGories[index],
          data: response.data.results,
        });
      });

      genreData.forEach((response, index) => {
        movieGenre.push({
          genre: `${Genres[index].name} Movies`,
          data: response.data.results,
        });
      });

      setGenres(movieGenre);
      setOther(movieData);
    };

    fetchData();
  }, []);

  if (!movie) return null;

  return (
    <div className="Home-Page">
      <TopMovDet key={6000} movie={movie} />
      {other.map((OthMov, index) => (
        <MovCol key={OthMov.category} index={index} movie={OthMov} />
      ))}
      {genres.map((genre, index) => (
        <MovVertCol key={genre.genre} index={index} genre={genre} />
      ))}
    </div>
  );
};

export default Movies;
