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
  StyledHeaderContainer,
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
      style={{ ...style, display: "block", backgroundColor:"red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Hero = () => {
  console.log(data)
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
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       slidesPerRow: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       slidesPerRow: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 400,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       slidesPerRow: 1,
    //     },
    //   },
    // ],
  };
  return (
    // <StyledHeaderContainer id="hero">
    <div style={{position:"relative", marginBottom: "70px"}}>
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
            Doskonała jakość nauki dostosowana do Twoich potrzeb.
          </StyledText>
        </StyledBox>
      </StyledBoxLogoAndTitle>
      <StyledLink smooth to="/#offer">
        <StyledBoxAngleText>
          <StyledText>zobacz więcej</StyledText>
        </StyledBoxAngleText>
        <StyledBoxAngleIcon>
          <StyledText>
            <FontAwesomeIcon icon={faAnglesDown} />
          </StyledText>
        </StyledBoxAngleIcon>
      </StyledLink>
    {/* </StyledHeaderContainer> */}
    </div>
  );
};

export default Hero;
