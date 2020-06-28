import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
let imageBaseUrl = "https://image.tmdb.org/t/p/w500";

export default function MovieItem(props) {
  return (
    <li>
      <Card
        style={{ width: "18rem", border: 'none'}}
        className="align-items-center justify-content-center m-5 shadow-sm"
      >
        <Card.Img variant="top" src={imageBaseUrl + props.movie.poster_path} />
        <Card.Body className='w-100'>
          <Card.Title style={{fontSize: '1.6rem'}}>{props.movie.title}</Card.Title>
          <Card.Text>{findGenresToRender(props.movie.genre_ids, props.genresList)}</Card.Text>


          <Card.Text>
          <Badge variant="warning" style={{fontSize: '0.85rem'}} className="mr-2">Rating {props.movie.vote_average}</Badge>
          <Badge variant="primary" style={{fontSize: '0.85rem'}}>{formatDate(props.movie.release_date)}</Badge>
          </Card.Text>


          <Button variant="light" className='bg-white' style={{border: '1px solid rgba(0,0,0,.125)'}}>Learn more</Button>
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
        <Badge className="mr-1" variant="light" key={`${genreId}`} style={{fontSize: '0.85rem'}}>
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
