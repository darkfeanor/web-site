import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Colors } from "../../Styles/colors";

export const MobileNavbarContainer = styled.aside<{ isOpen: boolean }>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${Colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3 ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const MobileIcon = styled(FaTimes)`
  color: white;
  font-size: 3em;
  align-self: flex-end;
  padding: 20px 35px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  padding: 20px 35px;
  background: transparent;
  font-size: 10em;
  cursor: pointer;
  outline: none;
`;

export const MobileNavbarWrapper = styled.div`
  color: white;
`;

export const MobileNavbarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: ${Colors.main_green};
    transition: 0.2s ease-in-out;
  }
`;

export const MobileNavbarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
