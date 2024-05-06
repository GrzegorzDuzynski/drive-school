import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import { StyledContainer, StyledBox } from "./Footer.css";

const Footer = () => {
  return (
    <StyledContainer>
      <StyledBox>
        <a href="tel:+48791577679">
          <FontAwesomeIcon className="icon" icon={faPhone} />
        </a>
        <FontAwesomeIcon
          // onClick={() => navigate("/contact")}
          className="icon"
          icon={faEnvelope}
        />
        <FontAwesomeIcon
          onClick={() => {
            window.location.href =
              "https://www.facebook.com/zoltypunkt/?locale=pl_PL";
          }}
          className="icon"
          icon={faFacebook}
        />
      </StyledBox>
    </StyledContainer>
  );
};

export default Footer;
