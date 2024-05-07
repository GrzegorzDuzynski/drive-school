import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import {
  StyledBoxImg,
  StyledBoxMiddle,
  StyledBoxRight,
  StyledContainer,
  StyledTitle,
  StyledBoxBlurr,
  StyledBoxContact,
  StyledTitleBank
} from "./Contact.css";

const Contact = () => {
  return (
    <>
      <StyledContainer id="contact">
        <StyledBoxMiddle>
          <StyledBoxImg>
            <iframe
              src="//maps.google.com/maps?output=embed&amp;q=Domaszowska 41, Kielce&amp;t=m&amp;hl=English"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </StyledBoxImg>
        </StyledBoxMiddle>
        <StyledBoxBlurr>
          <StyledBoxRight>
            <StyledBoxContact>
              <FontAwesomeIcon className="icon-contact"  icon={faLocationDot} />
              <StyledTitle style={{color:"white"}}>
                Kielce Domaszowska&nbsp;41 
              </StyledTitle>
            </StyledBoxContact>
            <a href="tel:+48791577679">
              <StyledBoxContact>
                <FontAwesomeIcon className="icon-contact"  icon={faPhone} />
                <StyledTitle style={{color:"white"}}>Piotr: 502&nbsp;204&nbsp;423</StyledTitle>
              </StyledBoxContact>
            </a>
            <StyledBoxContact>
                <FontAwesomeIcon className="icon-contact" icon={faBuildingColumns} />
                <StyledTitleBank style={{color:"white"}}>12&nbsp;2490&nbsp;0005&nbsp;0000&nbsp;4530&nbsp;0020&nbsp;4148</StyledTitleBank>
              </StyledBoxContact>
          </StyledBoxRight>
        </StyledBoxBlurr>
      </StyledContainer>
      {/* </form> */}
    </>
  );
};

export default Contact;
