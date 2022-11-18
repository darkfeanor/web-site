import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { Colors } from "../../Styles/colors";

export const Nav = styled.nav`
  background: ${Colors.main_grey}
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 0;
  font-size: 1.2em;
  z-index: 999;

  @media screen and (max-width: 960px) {
    transition: 1.7s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 5rem;
  width: 100%;
  padding: 0 3.5rem 0 3.5rem;
  z-index: 1;
`;

export const NavLogo = styled.div`
  height: 40px;
  width: 40px;
  align-items: center;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 2em;
    cursor: pointer;
    color: white;
  }
`;

export const NavItem = styled.li`
  height: 30px;
`;

export const NavLink = styled(LinkScroll)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
  font-family: "Source Code Pro", monospace;
  font-size: 15px;
  text-transform: capitalize;

  &:hover {
    color: ${Colors.main_green};
    transition: 0.2s ease-in-out;
  }

  &.active {
    border-bottom: 0.16em solid ${Colors.main_green};
  }
`;
