import React from "react";
import { FaGithub } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

export default function Myfooter() {
  return (
    <div className="p-4 main-footer" style={footer}>
      <Container>
        <Row>
          <Col className="text-dark">
            Made By our team :
            <a
              className="m-2 text-dark"
              href="https://github.com/Hewr-Srood"
              style={link}
            >
              <FaGithub /> Hewr
            </a>
            <a
              className="m-2 text-dark"
              href="https://github.com/neven2"
              style={link}
            >
              <FaGithub /> Neven
            </a>
            <a
              className="m-2 text-dark"
              href="https://github.com/Arvinalhissou"
              style={link}
            >
              <FaGithub /> Arvin
            </a>
            <a
              className="m-2 text-dark"
              href="https://github.com/vazhin"
              style={link}
            >
              <FaGithub /> Vazhin
            </a>
            <a
              className="m-2 text-dark"
              href="https://github.com/Zainab98Azzam"
              style={link}
            >
              <FaGithub /> Zainab
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const footer = {
  backgroundColor: "#D5D8DC",
  color: "#808B96 ",
  fontSize: "12px",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "",
  width: "100%"
};

const link = {
  color: "#34495E ",
  textDecoration: "none"
};
