import React from "react";
// import MSPhoto_new from "../MSPhoto_new.jpg";
import "./About.css";
import {
  StyledAboutContainer,
  StyledBox,
  StyledButton,
  StyledImgBox,
  StyledLink,
  StyledText,
  StyledTitle,
} from "./About.css";


const About = () => {
  return (
    <StyledAboutContainer id="about">
      <StyledImgBox>
        <img src="1.jpg" alt="abcd" />
      </StyledImgBox>
      <StyledBox>
        <StyledTitle>
          Jestem nauczycielem jazdy
        </StyledTitle>
        <StyledText style={{ textAlign: "justify" }}>

Jako instruktor z doświadczeniem w nauczaniu jazdy samochodem, priorytetem dla mnie jest staranna edukacja oraz kształtowanie właściwych nawyków u moich uczniów, które zagwarantują im bezpieczne podróżowanie po drogach. 
Uważam, że samo zdanie egzaminu to tylko pierwszy krok do sukcesu, dlatego staram się wkładać wysiłek w długofalowy rozwój umiejętności i bezpieczeństwo moich kursantów.

        </StyledText>
        <StyledButton>
          <StyledLink smooth to="/#contact">
            Proszę o kontakt
          </StyledLink>
        </StyledButton>
      </StyledBox>
    </StyledAboutContainer>
  );
};

export default About;
