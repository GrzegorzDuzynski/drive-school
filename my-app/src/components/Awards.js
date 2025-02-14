import React, { useEffect, useState } from "react";
import {
  StyledBox,
  StyledBoxImg,
  StyledCard,
  StyledContainer,
  StyledTitle,
} from "./Awards.css";
import { awards } from "../data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Awards = () => {

  return (
    <StyledContainer id="awards" key="1">
        {awards?.length > 0 && awards.map((el)=>(
          <StyledCard key={el.id}>
          <StyledBoxImg>
            <img src={el.img} alt="WSJ nagroda photo"/>
          </StyledBoxImg>
            </StyledCard>
        ))
        }
    </StyledContainer>
  );
};

export default Awards;
