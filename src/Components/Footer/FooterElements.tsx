import styled from "styled-components";
import { Colors } from "../../Styles/colors";

export const FooterBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px 3.5rem 0 3.5rem;
  opacity: 85%;
  min-height: 3em;
  height: fit-content;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    padding: 0;
  }
`;

export const FooterText = styled.div`
  padding: 0 3.5em 0 3.5em;
  color: white;
  font-size: 1em;
  align-self: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 0 3.5em 0.5em 3.5em;
  }
`;

export const LinkContainer = styled.div`
  visibility: hidden;
  display: none;

  @media screen and (max-width: 768px) {
    padding-top: 8px;
    padding-bottom: 8px;
    
    visibility: visible;
    display: flex;
    justify-content: center;
  }
`;
