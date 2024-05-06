import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../WSJ_transparent2.png";

import {
  StyledBoxCompany,
  StyledContainer,
  StyledLink,
  StyledList,
  StyledListItem,
  StyledTitle,
  StyledBox,
  StyledBoxContact,
  StyledTitleTel,
  StyledText,
  StyledBoxLogo,
} from "./Navigation.css";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const windowScreen = window;

  useEffect(() => {
    if (windowScreen.innerWidth >= 768) {
      setIsNavOpen(true);
    }
    windowScreen.addEventListener("resize", () => {
      if (windowScreen.innerWidth >= 850) {
        setIsNavOpen(true);
      } else {
        setIsNavOpen(false);
      }
    });
    return () =>
      windowScreen.removeEventListener("resize", () => {
        if (windowScreen.innerWidth >= 850) {
          setIsNavOpen(true);
        } else {
          setIsNavOpen(false);
        }
      });
  }, [windowScreen]);

  // const checkScroll = () => {
  //   let counterElement = document.getElementById("reputation");
  //   let position = counterElement.getBoundingClientRect().top;

  //   if (position < window.innerHeight) {
  //     setScroll(true);
  //   } else {
  //     setScroll(false);
  //   }
  // };

  // window.addEventListener("scroll", checkScroll, { passive: true });
  return (
    <StyledContainer
      style={scroll ? { backgroundColor: "rgba(145, 146, 143, 0.546)" } : {}}
    >
      <StyledBoxCompany>
        <StyledLink smooth to="/#hero">
          <StyledBoxLogo>
          <img src={logo} alt="Wyzsza szkoła jazdy" />
        </StyledBoxLogo>
        </StyledLink>
        <StyledBox>
          <a href="tel:+48502204423">
             <StyledBoxContact>
              <FontAwesomeIcon className="icon" icon={faPhone} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <StyledTitleTel>502&nbsp;204&nbsp;423</StyledTitleTel>
              </div>
            </StyledBoxContact>
          </a>
        </StyledBox>
      </StyledBoxCompany>
      <div>
        <FontAwesomeIcon
          className="icon-menu"
          icon={faBars}
          onClick={() => setIsNavOpen(!isNavOpen)}
        />

        {isNavOpen && (
          <nav style={{ display: "flex", alignItems: "center" }}>
            <StyledList>
              <StyledListItem>
                <StyledLink smooth to="/#offer">
                  Oferta
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink smooth to="/#about">
                  O mnie
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink smooth to="/#reputation">
                  Reputacja
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink smooth to="/#stats">
                  Statystyki
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink smooth to="/#contact">
                  Kontakt
                </StyledLink>
              </StyledListItem>
            </StyledList>
          </nav>
        )}
      </div>
    </StyledContainer>
  );
};

export default Navigation;
