import React from "react";
// import MSPhoto_new from "../MSPhoto_new.jpg";
import "./About.css";
import {
  StyledAboutContainer,
  StyledBox,
  StyledSignBox,
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
        {/* <StyledTitle>
          Piotr Biernat
        </StyledTitle> */}
        <StyledText style={{ textAlign: "justify" }}>
        
        Jako instruktor z 14-letnim doświadczeniem, w 2024 roku postanowiłem zrealizować swoje marzenie otwarcia własnej szkoły jazdy.

      </StyledText>
        <StyledText style={{ textAlign: "justify" }}>
      W ciągu lat mojej kariery miałem przyjemność przeszkolić ponad 1000 kursantów i kursantek, za co codziennie wyrażam ogromną wdzięczność za ich zaufanie.

      </StyledText>
      <StyledText style={{ textAlign: "justify" }}>
      Głównym celem mojej pracy jest przekazanie zgromadzonej wiedzy, umiejętności i doświadczenia, stale je pogłębiając i&nbsp;dzieląc się&nbsp;energią, którą podobno potrafię przekazać. Poprzez moją pracę kursanci zdobywają nie tylko umiejętności techniki jazdy i&nbsp;wykonywania manewrów, ale również kulturę drogową oraz właściwe zachowanie za kierownicą.

{/* Jako instruktor z doświadczeniem w nauczaniu jazdy samochodem, priorytetem dla mnie jest staranna edukacja oraz kształtowanie właściwych nawyków u moich uczniów, które zagwarantują im bezpieczne podróżowanie po drogach. 
Uważam, że samo zdanie egzaminu to tylko pierwszy krok do sukcesu, dlatego staram się wkładać wysiłek w długofalowy rozwój umiejętności i bezpieczeństwo moich kursantów. */}

        </StyledText>
        <StyledSignBox>
        <img src="podpis.png" alt="abcd" />
      </StyledSignBox>
      </StyledBox>
    </StyledAboutContainer>
  );
};

export default About;
