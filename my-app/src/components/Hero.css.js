import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { device } from "../breakpoints";


export const StyledHeroContainer = styled.div`
position:relative;
margin: 104px 0 70px 0;
 background-color: white;
 @media ${device.tabletL} {
  margin: 70px 0 70px 0;
}
`;

export const StyledBoxSlider = styled.div`
  width: 500px;
  position: relative;
  backdrop-filter: blur(20px);
  padding: 5px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  @media ${device.tabletL} {
    width: 260px;
  }
`;

export const StyledBoxAngleIcon = styled.div`
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: -60px;
  transform: translateX(-50%);
`;

export const StyledBoxOutside = styled.div`
  padding: 30px;
  @media ${device.tabletL} {
    padding: 15px;
  }
`;

export const StyledBox = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: height 0.3s;
  backdrop-filter: blur(20px) brightness(0.7);

  display: flex;
  flex-direction: column;
  gap: 10px;

`;

export const StyledBoxDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledBoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 600px;
  border: 2px solid #ddd;
  overflow: hidden;
`;

export const StyledBoxAngleText = styled.div`
  position: absolute;

  left: 50%;
  bottom: -30px;
  transform: translateX(-50%);
`;

export const StyledHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.secondColor};
  font-size: 45px;
  letter-spacing: 3px;
  .span {
    color: ${({ theme }) => theme.thirdColor};
  }
  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const StyledText = styled.p`
  color: ${({ theme }) => theme.secondColor};
  /* text-align: justify; */
  @media ${device.tablet} {
    font-size: 12px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.secondColor};

  padding: 4px;
  border: 2px solid ${({ theme }) => theme.secondColor};
  font-weight: 600;
  border-radius: 3px;
  overflow: hidden;
  position: absolute;
  left: 0;
  bottom: -50px;
  transition: 0.5s ease-in;
  &:hover {
    scale: 1.15;
  }
  @media ${device.tablet} {
    font-size: 12px;
    border: 1px solid ${({ theme }) => theme.secondColor};
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.secondColor};
  .box-button-hero {
    transition: all 500ms ease-in-out;
  }
  .title-button-hero {
    overflow: hidden;
    font-size: 20px;
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
  .old-text,
  .new-text {
    display: block;
    overflow: hidden;
    transition: all 500ms ease-in-out;
  }
  .old-text {
    height: auto;
    opacity: 1;
    width: auto;
  }
  .new-text {
    height: 0;
    opacity: 0;
    width: 0;
  }
  .box-button-hero:hover .old-text {
    height: 0px;
    opacity: 0;
    width: 0px;
  }
  .box-button-hero:hover .new-text {
    height: auto;
    opacity: 1;
    width: auto;
  }
`;

export const StyledBoxLogo = styled.div`
  height: 220px;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBoxLogoAndTitle = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%);

  display: flex;
  gap: 50px;
  justify-content: center;
  @media ${device.tablet} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 20px;
  }
`;
