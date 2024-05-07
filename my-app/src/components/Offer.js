import React, { useEffect, useState } from "react";
import {
  StyledBox,
  StyledBoxBottom,
  StyledBoxCheckbox,
  StyledBoxImg,
  StyledBoxImgPopup,
  StyledBoxPopup,
  StyledBoxText,
  StyledBoxTextLi,
  StyledBoxTextPopup,
  StyledBoxTop,
  StyledButton,
  StyledButtonContact,
  StyledCard,
  StyledCheckbox,
  StyledContainer,
  StyledText,
  StyledTitle,
} from "./Offer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Offer = () => {

  return (
    <StyledContainer id="offer" key="1">
      <StyledCard>
      <StyledBoxImg>
        <img src= "8.jpg" alt="zdjecie 8"/>
      </StyledBoxImg>
        <StyledTitle>
          Kurs na prawo jazdy kat.B 
        </StyledTitle>
        <StyledTitle>
          Cena 2700 zł
        </StyledTitle>
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
      </StyledCard>

      
    </StyledContainer>
  );
};

export default Offer;
