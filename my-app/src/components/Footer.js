import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok  } from "@fortawesome/free-brands-svg-icons";

import { StyledContainer, StyledBox, StyledGDDEVBox, StyledGDDEVTitle } from "./Footer.css";

const Footer = () => {
  return (
    <StyledContainer>
        <StyledGDDEVBox  
         onClick={() => { window.location.href =
                    "https://gddev.pl";
                  }}>
            <StyledGDDEVTitle>
              GD <span style={{ color: "rgb(186, 178, 178)"}}>Developer</span>
            </StyledGDDEVTitle>
        </StyledGDDEVBox>
       <StyledBox>
              <a href="tel:+48502204423">
                <FontAwesomeIcon className="icon" style={{color:"white"}} icon={faPhone} />
              </a>
              <FontAwesomeIcon
                onClick={() => { window.location.href =
                    "https://www.instagram.com/wsjkielce/";
                  }}
                className="icon"
                style={{color:"white"}}
                icon={faInstagram}
              />
              <FontAwesomeIcon
                onClick={() => {
                  window.location.href =
                    "https://www.tiktok.com/@wyzsza.szkola.jazdy?_t=8m7OTH701lm&_r=1";
                }}
                className="icon"
                style={{color:"white"}}
                icon={faTiktok}
              />
              <FontAwesomeIcon
                onClick={() => {
                  window.location.href =
                    "https://www.facebook.com/profile.php?id=61556754985728";
                }}
                className="icon"
                style={{color:"white"}}
                icon={faFacebook}
              />
            </StyledBox>
    </StyledContainer>
  );
};

export default Footer;
