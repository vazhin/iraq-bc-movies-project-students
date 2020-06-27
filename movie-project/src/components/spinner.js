import React from "react";
import { Spinner } from "react-bootstrap";

export default function MySpinner(props) {
  return (
    <Spinner
      animation="border"
      role="status"
      className="m-2"
      variant="info"
      hidden={props.show}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}
