import React, { useEffect, useState } from "react";
import "./About.css";
import {
  StyledAboutContainer,
  StyledBox,
  StyledSignBox,
  StyledImgBox,
  StyledText,
} from "./About.css";


const About = () => {
  const [yearsStart, setYearsStart] = useState(new Date("2010/09/01"));
  const [years, setYears] = useState(0);

  let today = new Date();

  useEffect(() => {
    const yearsOnMarket = () => {
      setYears(
        (
          Math.round((today - yearsStart) / (1000 * 60 * 60 * 24)) / 365
        ).toFixed(0)
      );
    };
    yearsOnMarket()
  }, []);

  return (
    <StyledAboutContainer id="about">
      <StyledImgBox>
        <img src="1.jpg" alt="abcd" />
      </StyledImgBox>
      <StyledBox>
        <StyledText style={{ textAlign: "justify" }}>
          Jako instruktor z {years}-letnim doświadczeniem, w 2024 roku postanowiłem zrealizować swoje marzenie o otwarciu własnej szkoły.
        </StyledText>
        <StyledText style={{ textAlign: "justify" }}>
          W ciągu wielu lat mojej pracy miałem przyjemność przeszkolić ponad 1000 kursantów i kursantek, za co codziennie wyrażam ogromną wdzięczność za ich zaufanie.
        </StyledText>
        <StyledText style={{ textAlign: "justify" }}>
          Głównym celem mojej pracy jest przekazanie zgromadzonej wiedzy, umiejętności i doświadczenia, stale je pogłębiając i&nbsp;dzieląc się pozytywną energią, którą podobno potrafię przekazać. Poprzez moją pracę kursanci zdobywają nie tylko umiejętności techniki jazdy i&nbsp;wykonywania manewrów, ale również kulturę drogową oraz właściwe zachowanie za kierownicą.
        </StyledText>
        <StyledSignBox>
          <img src="podpis.png" alt="podpis" />
        </StyledSignBox>
      </StyledBox>
    </StyledAboutContainer>
  );
};

export default About;
