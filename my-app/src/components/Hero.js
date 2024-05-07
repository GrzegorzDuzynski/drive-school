import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { data } from "../data.js"

import {
  StyledBox,
  StyledButton,
  StyledHeroContainer,
  StyledHeaderTitle,
  StyledText,
  StyledBoxAngleText,
  StyledBoxAngleIcon,
  StyledLink,
  StyledBoxLogo,
  StyledBoxLogoAndTitle,
  StyledBoxSlider,
  StyledBoxDiv,
  StyledBoxOutside,
  StyledBoxImg,
} from "./Hero.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, right:20, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, zIndex:6,  left:20, display: "block"}}
      onClick={onClick}
    />
  );
}

const Hero = () => {
  let settings = {
    dots: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "20px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <StyledHeroContainer id="hero">
       <Slider {...settings}>
          {data.map((img, id) => (
                  <StyledBoxImg key={img.id}>
                    <img
                      src={img.img}
                      alt={img.text}
                      referrerPolicy="no-referrer"
                    />
                   </StyledBoxImg>
          ))}
        </Slider>
      <StyledBoxLogoAndTitle>
        <StyledBox>
          <StyledHeaderTitle>
            Wyższa szkoła jazdy
          </StyledHeaderTitle>
          <StyledText>
            Szybko, skutecznie i bezstresowo
          </StyledText>
        </StyledBox>
      </StyledBoxLogoAndTitle>
      <StyledLink smooth to="/#offer">
        <StyledBoxAngleText>
          <StyledText style={{color:"gray"}}>zobacz więcej</StyledText>
        </StyledBoxAngleText>
        <StyledBoxAngleIcon>
          <StyledText style={{color:"gray"}}>
            <FontAwesomeIcon icon={faAnglesDown} />
          </StyledText>
        </StyledBoxAngleIcon>
      </StyledLink>
    </StyledHeroContainer>

  );
};

export default Hero;
