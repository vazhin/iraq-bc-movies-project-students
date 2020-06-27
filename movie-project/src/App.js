import React, { useState } from "react";
import "./styles.css";
import MyNavbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Myfooter from "./components/footer";
import Main from "./components/main";
let TMDB_BASE_URL = "https://api.themoviedb.org/3";

const constructUrl = (path, query) => {
  return `${TMDB_BASE_URL}/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}&query=${query}`;
};

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [genresList, setGenresList] = useState([]);

  function handleMovies(movies) {
    setMoviesList(movies);
  }

  function handleGenresList(genres) {
    setGenresList(genres);
  }

  function handleQuery(query) {
    setQuery(query);
  }
  return (
    <>
      <MyNavbar
        setMoviesList={setMoviesList}
        handleMovies={handleMovies}
        handleGenresList={handleGenresList}
        constructUrl={constructUrl}
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
        genresList={genresList}
        setGenresList={setGenresList}
        handleQuery={handleQuery}
        query={query}
      />
      <Main
        moviesList={moviesList}
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
        genresList={genresList}
        query={query}
      />
      <Myfooter />
    </>
  );
}

export default App;
