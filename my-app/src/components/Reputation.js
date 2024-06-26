import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import GLogo from "./../icon-google.png";
import "./Reputation.css";
import { opinions } from "../data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-solid-svg-icons";
// import { loadGoogleMapsPlacesAPI } from "../utils";
import {
  StyledBigTitle,
  StyledBox,
  StyledBoxOutside,
  StyledContainer,
  StyledText,
  StyledTitle,
  StyledBoxImg,
  StyledBoxDiv,
  StyledButton,
} from "./Reputation.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
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

const Reputation = () => {
  const [opinionsObj, setOpinionsObj] = useState(()=>opinions);
  const [expandedOpinions, setExpandedOpinions] = useState({});
  const [showFullText, setShowFullText] = useState({});

  const toggleExpanded = (id) => {
    setExpandedOpinions({
      ...expandedOpinions,
      [id]: !expandedOpinions[id],
    });
    setShowFullText({
      ...showFullText,
      [id]: !showFullText[id],
    });
  };

  let settings = {
    dots: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    adaptiveHeight: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };
  return (
    <StyledContainer id="reputation">
      <StyledBigTitle>Co mówią moi kursanci?</StyledBigTitle>
      {opinionsObj && (
        <Slider {...settings}>
          {opinionsObj.map((opinion, id) => (
            <StyledBoxOutside key={id}>
              <StyledBox
                style={{
                  // height: expandedOpinions[id] ? "auto" : "230px",
                  height: "230px",
                }}
              >
                <StyledBoxDiv>
                  <StyledBoxImg>
                    <img src={opinion.img}/>
                  </StyledBoxImg>
                  <StyledTitle>{opinion.author}</StyledTitle>
                </StyledBoxDiv>
                <StyledText
                  showfulltext={showFullText[id] ? showFullText[id] : ""}
                  expanded={expandedOpinions[id] ? expandedOpinions[id] : ""}
                >
                  {opinion.text}
                </StyledText>
                {/* <StyledButton onClick={() => toggleExpanded(id)}>
                  {showFullText[id] ? "Zwiń" : "Rozwiń"}
                </StyledButton> */}
              </StyledBox>
            </StyledBoxOutside>
          ))}
          
        </Slider>
      )}
    </StyledContainer>
  );
};

export default Reputation;
