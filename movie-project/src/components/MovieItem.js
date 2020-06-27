import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
let imageBaseUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieItem(props) {
  return (
    <li>
      <Card
        style={{ width: "17rem" }}
        className="align-items-center justify-content-center m-2"
      >
        <Card.Img variant="top" src={imageBaseUrl + props.movie.poster_path} />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>
            Genre:
            {findGenresToRender(props.movie.genre_ids, props.genresList)}
          </Card.Text>
          <Card.Text>Rating: {props.movie.vote_average}</Card.Text>
          <Card.Text>
            Initial release: {formatDate(props.movie.release_date)}
          </Card.Text>
          <Button variant="info">Learn more</Button>
        </Card.Body>
      </Card>
    </li>
  );
}

function findGenresToRender(movieGenreIds, genresList) {
  return movieGenreIds.map(genreId => {
    let theGenre = genresList.find(item => item.id === genreId);
    if (theGenre) {
      return (
        <Badge className="ml-1" variant="secondary" key={`${genreId}`}>
          {theGenre.name}
        </Badge>
      );
    }
    return <span />;
  });
}

function formatDate(date) {
  let dateObj = new Date(date);
  let dateString = dateObj.toDateString();
  return dateString.slice(4, 10) + ", " + dateString.slice(11);
}
