import styled from "styled-components";
import { Colors } from "../../Styles/colors";

export const ContactBody = styled.div`
  padding: 150px 0px;
  text-align: center;
  max-width: 600px;
  margin: 0px auto 100px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding: 150px 0px;
  }
`;

export const ContactTitle = styled.h1`
  display: flex;
  font-size: 40px;
  color: white;
  font-family: "Open Sans", Arial, sans-serif;
  font-weight: 100;

  @media screen and (max-width: 768px) {
    font-size: 2.5em;
  }

  @media screen and (min-width: 768px) {
    padding-top: 1em;
    padding-left: 0;
    width: auto;

    &:after {
      content: "";
      flex: 1;
      background: ${Colors.dark_grey};
      margin-left: 0.8em;
      height: 1px;
      align-self: center;
    }
  }
`;

export const Link = styled.a`
  border-radius: 2px;
  border: 1px solid ${Colors.main_green};
  box-sizing: border-box;
  color: white;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  padding: 18px 23px;
  vertical-align: center;
  margin-top: 36px;
  transition: 500ms;
  font-family: "Source Code Pro", monospace;

  &:hover {
    background-color: ${Colors.light_green};
  }

  @media screen and (max-width: 768px) {
    margin-top: 5em;
  }
`;

export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: fit-content;
  }
`;
