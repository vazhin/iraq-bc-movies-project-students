import React from "react";
import MovieItem from "./MovieItem";

export default function MoviesGrid(props) {
  return (
    <>
      <ul
        style={{ listStyle: "none", padding: '0' }}
        className="d-flex align-items-center justify-content-center flex-wrap"
      >
        {props.moviesList &&
          props.moviesList.map((movie, index) => (
            <MovieItem
              key={`${index}`}
              movie={movie}
              isLoaded={props.isLoaded}
              setIsLoaded={props.setIsLoaded}
              genresList={props.genresList}
            />
          ))}
      </ul>
    </>
  );
}
