import React from "react";
import { MdMovieFilter } from "react-icons/md";
import SearchBox from "./searchBox";
import { Navbar } from "react-bootstrap";
import GenreSelector from "./genres";

export default function MyNavbar(props) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="text-warning ">
          <MdMovieFilter size="2.5rem" className='text-primary' />
          <span className="text-info display-3 text-dark" style={{ fontSize: '1.7rem' }}> movies</span>
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
          className="bg-light"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="my-2 row
           justify-content-end"
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
