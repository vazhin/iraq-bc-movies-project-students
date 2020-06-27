import { Form, Nav } from "react-bootstrap";
import React, { useState } from "react";

export default function GenreSelector(props) {
  const [popularMovies, setPopularMovies] = useState([]);
  fetchMovieGenres(props.isLoaded, props.handleGenresList, props.setIsLoaded);
  fetchPopularMovies(props.isLoaded, props.handleMovies, setPopularMovies);
  let genresList = [...props.genresList];
  return (
    <Nav className="mr-auto mb-0">
      <Form.Group className="mb-0" controlId="exampleForm.ControlSelect1">
        <Form.Control
          as="select"
          onChange={e => {
            let selectedGenre = Number(e.target.value);
            const filteredMovies = popularMovies.filter(movie =>
              movie.genre_ids.includes(selectedGenre)
            );
            props.handleMovies(filteredMovies);
          }}
        >
          {genresList.map(genre => {
            return (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    </Nav>
  );
}

function fetchMovieGenres(isLoaded, handleGenresList, setIsLoaded) {
  if (!isLoaded) {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${atob(
        "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
      )}`
    )
      .then(response => response.json())
      .then(json => handleGenresList(json.genres));
    setIsLoaded(true);
  }
}

function fetchPopularMovies(isLoaded, handleMovies, setPopularMovies) {
  if (!isLoaded) {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${atob(
        "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
      )}&language=en-US&page=100`
    )
      .then(response => response.json())
      .then(json => {
        handleMovies(json.results);
        setPopularMovies(json.results);
      });
  } else {
    return;
  }
}
