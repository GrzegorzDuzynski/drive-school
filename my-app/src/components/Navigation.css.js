import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import { device } from "../breakpoints";

export const StyledContainer = styled.div`
  padding: 0 50px;
  background: white;
  border-bottom: 1px solid ${({ theme }) => theme.secondColor};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobileL} {
    padding: 10px 15px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  @media ${device.tablet} {
    background-color: rgba(145, 146, 143, 0.546);
    padding: 10px;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    bottom: -140px;
    right: 0;
    z-index: 10;
  }
`;

export const StyledBoxCompany = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const StyledBoxLogo = styled.div`
  width: 160px;
  padding: 25px 0 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.mobileL} {
    width: 110px;
    padding: 10px 0 10px 0;
  }
`;
export const StyledListItem = styled.li`
  color: gray;
  transition: 0.5s ease-in;
  position: relative;
  z-index: 1;
  /* background-color: rgba(145, 146, 143, 0.546); */

  /* border-bottom: 2px solid orange; */
  &::after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -5px;
    background-color: ${({ theme }) => theme.fiveColor};
    transition: 0.3s ease-in;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  /* background-color: rgba(145, 146, 143, 0.546); */
  color: ${({ theme }) => theme.fiveColor};
`;

export const StyledTitle = styled.h1`
  /* color: ${({ theme }) => theme.firstColor}; */
  color: yellow;
  @media ${device.tabletL} {
    font-size: 24px;
  }
  @media ${device.mobileL} {
    display: none;
  }
`;

export const StyledBox = styled.div`
  padding: 10px 10px;
  display: flex;
  gap: 20px;
`;


export const StyledBoxContact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const StyledTitleTel = styled.h1`
  font-size: 20px;
  /* color: black; */
  color: ${({ theme }) => theme.zeroColor}; 
  @media ${device.tabletL} {
    font-size: 16px;
  }
`;

export const StyledText = styled.p`
  font-size: 14px;
  color: white;
  /* color: ${({ theme }) => theme.zeroColor}; */
  @media ${device.tablet} {
    font-size: 9px;
  }
`;
