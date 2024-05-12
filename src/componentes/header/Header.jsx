import React from "react";
import logo from "../../assets/logo-altanto.png";
import "./header.css";
import { Col, Container, Row } from "react-bootstrap";
import LoginIcon from '@mui/icons-material/Login';

function Header() {
  return (
    <section className="at-header">
      <Container className="h-100">
        <Row className="h-100 align-items-center">
          <Col>
            <img src={logo} alt="Logo Al Tanto" />
          </Col>
          <Col className="text-end">
            <strong>
              <a href="#" className="text-white text-decoration-none">
                Ir al sitio <LoginIcon className="ms-2"/>
              </a>
            s</strong>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header;
