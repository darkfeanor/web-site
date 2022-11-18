import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  MobileMenuIcon,
  NavItem,
  NavLink,
  NavMenu,
} from "./NavbarElements";

interface NavbarProps {
  toggle: () => void;
}

enum Links {
  HOME = "home",
  ABOUT = "about",
  EXPERIENCE = "experience",
}

const Navbar = (props: NavbarProps) => {
  return (
    <Nav>
      <NavContainer>
        <MobileMenuIcon onClick={props.toggle}>
          <FaBars />
        </MobileMenuIcon>
        <NavMenu>
          {Object.values(Links).map((link: Links) => (
            <NavItem key={link}>
              <NavLink to={link} spy={true} offset={-80}>
                {link}
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
