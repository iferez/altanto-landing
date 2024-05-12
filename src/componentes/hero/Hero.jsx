import React from "react";
import mapa from "../../assets/mapaylogo22.png";
import "./hero.css";
import { Col, Container, Row } from "react-bootstrap";

function Hero() {
  return (
    <section className="at-hero">
      <Container className="at-container-hero">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="mt-2 mt-lg-0">
              No te pierdas nada <br /> de lo que está pasando
            </h2>
            <h1 className="mt-5">
              Mantenete <strong>Al Tanto</strong>
            </h1>
            <a href="#" className="btn-altanto mt-2 mt-lg-3">COMENZAR</a>
          </Col>
          <Col md={6}>
            <img className="my-5" src={mapa} alt="Mapa con alertas" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
