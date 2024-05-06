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
        <StyledTitle>
          Zawsze dobra oferta w cenie 2500zł
        </StyledTitle>

        <StyledTitle>
          napisz do mnie :
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
      <StyledBoxImg>
        <img src= "https://img.freepik.com/darmowe-zdjecie/mloda-dziewczyna-z-napisem-sprzedazy-na-rozdartej-zoltej-powierzchni-w-pomieszczeniach-na-zakupy_140725-158633.jpg?t=st=1715002378~exp=1715005978~hmac=e63b3cf5a35dcfed51c9a46728d37714ef09d30ce19ceccdb80878adac58f990&w=1380" alt="abcd"/>
      </StyledBoxImg>
      
    </StyledContainer>
  );
};

export default Offer;
