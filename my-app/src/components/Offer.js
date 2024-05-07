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
import { offer } from "../data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Offer = () => {
console.log(offer)
  return (
    <StyledContainer id="offer" key="1">
      
        {offer.map((el)=>(
          <StyledCard key={el.id}>
          <StyledBoxImg>
            <img src={el.img} alt="WSJ photo"/>
          </StyledBoxImg>
            <StyledTitle>
              {el.text}
            </StyledTitle>
            <StyledTitle>
              {el.price} zł
            </StyledTitle>
            <StyledBox>
              <a href="tel:+48502204423">
                <FontAwesomeIcon className="icon" icon={faPhone} />
              </a>
              <FontAwesomeIcon
                onClick={() => { window.location.href =
                    "https://www.instagram.com/wsjkielce/";
                  }}
                className="icon"
                icon={faInstagram}
              />
              <FontAwesomeIcon
                onClick={() => {
                  window.location.href =
                    "https://www.tiktok.com/@wyzsza.szkola.jazdy?_t=8m7OTH701lm&_r=1";
                }}
                className="icon"
                icon={faTiktok}
              />
              <FontAwesomeIcon
                onClick={() => {
                  window.location.href =
                    "https://www.facebook.com/profile.php?id=61556754985728";
                }}
                className="icon"
                icon={faFacebook}
              />
            </StyledBox>
            </StyledCard>
        ))


        }


      
    </StyledContainer>
  );
};

export default Offer;
