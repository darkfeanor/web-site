import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaXingSquare, FaFileDownload } from "react-icons/fa";
import { SocialIcon } from "../Sidebar/SidebarElements";
import { FooterBody, FooterText, LinkContainer } from "./FooterElements";

import pdf from "./../../Assets/Lebenslauf_de.pdf";

const Footer = () => {
  return (
    <>
      <FooterBody>
        <LinkContainer>
        <SocialIcon href="mailto:darkfeanor91@gmail.com" style={{marginLeft:"30px", marginRight:"30px"}}>
          <FiMail size={20} style={{ cursor: "pointer", pointerEvents: "none"}}/>
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/denis-filimonov-51bb71176/" style={{marginLeft:"30px", marginRight:"30px"}}>
          <FaLinkedin size={20} style={{ cursor: "pointer", pointerEvents: "none" }} />
        </SocialIcon>
        <SocialIcon href="https://www.xing.com/profile/Denis_Filimonov/cv" style={{marginLeft:"30px", marginRight:"30px"}}>
          <FaXingSquare size={20} style={{ cursor: "pointer", pointerEvents: "none" }}/>
        </SocialIcon>
        <SocialIcon href={pdf} download="Lebenslauf.pdf" style={{marginLeft:"30px", marginRight:"30px"}}>
          <FaFileDownload size={20} style={{ cursor: "pointer", pointerEvents: "none" }} />
        </SocialIcon>


        </LinkContainer>
        <FooterText>© Copyright 2023. All rights reserved</FooterText>
      </FooterBody>
    </>
  );
};

export default Footer;
