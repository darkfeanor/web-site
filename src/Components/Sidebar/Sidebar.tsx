import { Line, SidebarBody, SocialIcon } from "./SidebarElements";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaXingSquare, FaFileDownload } from "react-icons/fa";
import pdf from "./../../Assets/Lebenslauf_de.pdf";

const iconSize = 30;
const Sidebar = () => {
  return (
    <>
      <SidebarBody >
        <SocialIcon href="mailto:darkfeanor91@gmail.com">
          <FiMail size={iconSize} style={{ cursor: "pointer", pointerEvents: "none" }}/>
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/Dennis-Filbert-51bb71176/">
          <FaLinkedin size={iconSize} style={{ cursor: "pointer", pointerEvents: "none" }} />
        </SocialIcon>
        <SocialIcon href="https://www.xing.com/profile/Dennis_Filbert/cv">
          <FaXingSquare size={iconSize} style={{ cursor: "pointer", pointerEvents: "none" }}/>
        </SocialIcon>
        <SocialIcon href={pdf} download="Lebenslauf.pdf">
          <FaFileDownload size={iconSize} style={{ cursor: "pointer", pointerEvents: "none" }} />
        </SocialIcon>
        <Line />
      </SidebarBody>
    </>
  );
};

export default Sidebar;
