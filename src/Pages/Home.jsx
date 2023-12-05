import { useEffect, useState, Suspense, lazy } from "react";
import axios from "axios";

const MovCol = lazy(() => import("../components/MovCol"));
const MovVertCol = lazy(() => import("../components/MovVertCol"));
const TopMovDet = lazy(() => import("../components/TopMovDet"));

const Home = () => {
  const Genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 37,
      name: "Western",
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

      const ResPonse = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
      );
      for (let category of CateGories) {
        const ResPonse = await axios.get(
          `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}`
        );
        movieData.push({ category, data: ResPonse.data.results });
        // console.log(movieData);
      }
      for (let gen of Genres) {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${gen.id}`
        );
        movieGenre.push({
          genre: `${gen.name} Movies`,
          data: response.data.results,
        });
      }
      setGenres(movieGenre);
      setOther(movieData);
      setMovie(ResPonse.data);
    };

    fetchData();
  }, []);

  if (!movie) return null;

  return (
    <>
      <div className="Home-Page">
        <Suspense fallback={<div>Loading...</div>}>
          <TopMovDet key={6000} movie={movie} />
          {other.map((OthMov, index) => (
            <MovCol key={OthMov.category} index={index} movie={OthMov} />
          ))}
          {genres.map((genre, index) => (
            <MovVertCol key={genre.genre} index={index} genre={genre} />
          ))}
        </Suspense>
      </div>
    </>
  );
};

export default Home;
