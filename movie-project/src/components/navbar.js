import React from "react";
import { MdMovieFilter } from "react-icons/md";
import SearchBox from "./searchBox";
import { Navbar } from "react-bootstrap";
import GenreSelector from "./genres";

export default function MyNavbar(props) {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home" className="text-warning ">
          <MdMovieFilter size="2.5rem" color="#17a2b8" />
          <span className="text-info"> movies</span>
        </Navbar.Brand>
        <GenreSelector
          handleMovies={props.handleMovies}
          handleGenresList={props.handleGenresList}
          isLoaded={props.isLoaded}
          setIsLoaded={props.setIsLoaded}
          genresList={props.genresList}
        />
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-secondary"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="my-2 row
           justify-content-end "
        >
          <SearchBox
            handleMovies={props.handleMovies}
            handleQuery={props.handleQuery}
            constructUrl={props.constructUrl}
            query={props.query}
          />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}