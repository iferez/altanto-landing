import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GroupsIcon from "@mui/icons-material/Groups";
import NearMeIcon from "@mui/icons-material/NearMe";
import { useMediaQuery } from "@mui/material";
import "./content.css";

function Content() {
  const mobile = useMediaQuery("(min-width:768px)");

  return (
    <section className="at-content">
      <Container>
        <h2 className="text-center mt-5">Accede a toda la información</h2>
        <Row className="align-items-center text-center py-5 my-md-5">
          <Col md={6}>
            <LocationOnIcon />
          </Col>
          <Col md={6}>
            <h4>
              Con tu <strong>localización</strong> podemos brindarte diferentes
              tipos de reportes. Tendrás notificaciones sobre seguridad,
              transporte, vía pública y mucho más.
            </h4>
          </Col>
        </Row>

        <Row className="align-items-center text-center py-5 my-md-5">
          {mobile ? (
            <>
              <Col md={6}>
                <h4>
                  Podrás gestionar <strong>grupos</strong> y notificaciones
                  personalizadas. Creando comunidades y obteniendo reportes de
                  todos los miembros del grupo.
                </h4>
              </Col>
              <Col md={6}>
                <GroupsIcon />
              </Col>
            </>
          ) : (
            <>
              <Col md={6}>
                <GroupsIcon />
              </Col>
              <Col md={6}>
                <h4>
                  Podrás gestionar <strong>grupos</strong> y notificaciones
                  personalizadas. Creando comunidades y obteniendo reportes de
                  todos los miembros del grupo.
                </h4>
              </Col>
            </>
          )}
        </Row>

        <Row className="align-items-center text-center py-5 my-md-5">
          <Col md={6}>
            <NearMeIcon />
          </Col>
          <Col md={6}>
            <h3>
              Guarda tus <strong>zonas y recorridos</strong> favoritos. De esta
              forma estarás siempre al tanto de todo lo que ocurre.
            </h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Content;
