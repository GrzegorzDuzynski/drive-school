import React, { useEffect, useState } from "react";
import {
  StyledBox,
  StyledBoxImg,
  StyledCard,
  StyledContainer,
  StyledTitle,
} from "./Offer.css";
// import { offer } from "../data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const Offer = () => {

  const [offer, setOffer ] = useState()

  useEffect(() => {
    axios.get('https://wsjkielce.pl/wp-headless/wp-json/wp/v2/prices')
      .then(function (response) {
        setOffer(response.data)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }, []);

  return (
    <StyledContainer id="offer" key="1">
        {offer?.length > 0 && offer.map((el)=>(
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
