import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Preloader";
import { useState, useEffect, Suspense, lazy } from "react";
import "./App.scss";

const MovDetails = lazy(() => import("./components/MovDetails"));
const MovieSearch = lazy(() => import("./Pages/MovieSearch"));
const NavBar = lazy(() => import("./components/NavBar"));
const Trending = lazy(() => import("./Pages/Trending"));
const Movies = lazy(() => import("./Pages/Movies"));
const Home = lazy(() => import("./Pages/Home"));
const Tv = lazy(() => import("./Pages/Tv"));

function App() {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const PreLoader = () => {
      setTimeout(() => {
        setisLoading(false);
      }, 1550);
    };
    PreLoader();
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Preloader />
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <Routes>
            <Route path="/trending" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/search" element={<MovieSearch />} />
            <Route path="/" element={<Home />} exact />
            <Route path="/movie/:id" element={<MovDetails />} />
          </Routes>
        </Suspense>
      )}
    </Router>
  );
}

export default App;
