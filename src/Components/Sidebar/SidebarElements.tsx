import styled from "styled-components";
import { Colors } from "../../Styles/colors";

export const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 2vw;
  gap: 1em;
  width: fit-content;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 8rem;
  background-color: white;
  align-items: center;
  align-self: center;
`;

export const SocialIcon = styled.a`
  color: white;
  cursor: pointer;


  &:hover {
    color: ${Colors.main_green};
  }

  @media screen and (max-width: 768px) {
    &:hover {
      color: white;
    }
  }
`;
