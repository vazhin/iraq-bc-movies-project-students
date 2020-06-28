import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import MySpinner from "./spinner";

export default function SearchBox(props) {
  const [show, setShow] = useState(true);
  const onSearch = event => {
    props.handleQuery(event.target.value);
    setShow(false);
    setInterval(() => {
      setShow(true);
    }, 2000);
  };

  return (
    <>
      <MySpinner show={show} />
      <Form
        inline
        onSubmit={e => {
          e.preventDefault();
          let element = e.target.children[0];
          let url = props.constructUrl("search/movie", props.query);

          fetch(url)
            .then(response => response.json())
            .then(json => {
              props.handleMovies(json.results);
              element.value = "";
            });
        }}
      >
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-s w-auto"
          value={props.query}
          onChange={onSearch}
        />
        <Button type="submit" variant="outline-primary" className="m-1">
          Search
        </Button>
      </Form>
    </>
  );
}
