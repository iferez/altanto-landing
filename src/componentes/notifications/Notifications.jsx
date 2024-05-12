import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./notifications.css";
import { Container } from "react-bootstrap";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import ReportIcon from "@mui/icons-material/Report";
import { useMediaQuery } from "@mui/material";
import Report from "./Report";

function Notifications() {
  const mobile = useMediaQuery("(max-width:768px)");

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: mobile ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="at-notifications">
      <Container>
        <Slider {...settings}>
          <Report
            title={"Seguridad"}
            description={"Dos personas en moto andan robando"}
            dtime={"11/05/2024 - 21:48hs"}
            icon={WarningIcon}
            icolor={"#ff0000"}
          />
          <Report
            title={"Clima"}
            description={"Posibilidades de granizo"}
            dtime={"21/05/2024 - 12:33hs"}
            icon={ErrorIcon}
            icolor={"#00ccff"}
          />
          <Report
            title={"Vía Pública"}
            description={"Calle cortada por manifestantes"}
            dtime={"10/05/2024 - 18:00hs"}
            icon={ReportIcon}
            icolor={"#ffc000"}
          />
        </Slider>
      </Container>
    </section>
  );
}

export default Notifications;
