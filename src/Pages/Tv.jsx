import MovVertCol from "../components/MovVertCol";
import Trendall from "../components/Trendall";
import { useEffect, useState } from "react";
import axios from "axios";

const Tv = () => {
  const [movie, setMovie] = useState(null);
  const [Shows, setShows] = useState([]);

  const TvShows = ["airing_today", "on_the_air", "popular","top_rated"];

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "15074d7bf5380ec4579be33a91d596b5";
      const TvsShows = [];
    
      const topRatedResponse = axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`
      );
    
      const tvShowRequests = TvShows.map((tvShow) =>
        axios.get(
          `https://api.themoviedb.org/3/tv/${tvShow}?api_key=${apiKey}`
        )
      );
    
      const [topRatedData, ...tvShowData] = await Promise.all([
        topRatedResponse,
        ...tvShowRequests,
      ]);
    
      setMovie(topRatedData.data);
    
      tvShowData.forEach((response, index) => {
        TvsShows.push({ Tv: `${TvShows[index]} Tv Shows`, data: response.data.results });
      });
    
      setShows(TvsShows);
    };
    
    fetchData();
  }, []);

  if (!movie) return null;

  return (
    <>
      <div className="Home-Page">
        <Trendall key={6000} movie={movie} />
        <div key={7000}>
          {Shows.map((genre, index) => (
            <MovVertCol key={genre.Tv} index={index} genre={genre}  />
          ))}
        </div>
      </div>
    </>
  );
};
export default Tv;
