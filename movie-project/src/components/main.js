import React from "react";
import MoviesGrid from "./MoviesGrid";

export default function Main(props) {
  return (
    <MoviesGrid
      moviesList={props.moviesList}
      setIsLoaded={props.setIsLoaded}
      isLoaded={props.isLoaded}
      genresList={props.genresList}
    />
  );
}
