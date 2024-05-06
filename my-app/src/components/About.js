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
        <img src="https://img.freepik.com/darmowe-zdjecie/mezczyzna-w-zielonej-koszuli-o-rekami-skrzyzowanymi_23-2148401380.jpg?t=st=1715000053~exp=1715003653~hmac=0e227751360ffeabcf69d1119821fa0b35abc63620dc58cc1f756ff389c0e0d2&w=360" alt="abcd" />
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
