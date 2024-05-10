import styled from "styled-components";
import { device } from "../breakpoints";

export const StyledContainer = styled.div`
  background-color: rgba(43,42,41,255);
  padding: 18px 50px;
  z-index: -1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    padding: 10px 20px;
  }
`;

export const StyledBox = styled.div`
  // padding: 10px 50px;
  display: flex;
  gap: 20px;
  @media ${device.tablet} {
    // padding: 10px 25px;
  }
`;

export const StyledGDDEVBox= styled.div`
  justify-self: start;
  cursor: pointer;
`;

export const StyledGDDEVTitle= styled.h3`
    cursor: pointer;
    color: orange;
    font-size: 16px;
    letter-spacing: 6px;
    font-weight: 600;
    @media ${device.tablet} {
      font-size: 10px;
      letter-spacing: 4px;
    }

`;
