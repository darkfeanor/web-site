import styled from "styled-components";
import { Colors } from "../../Styles/colors";

export const AboutBody = styled.div`
  display: flex;
  margin: 0px auto;
  min-height: 100%;
  padding-bottom: 150px;
  max-width: 1000px;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0px 1rem 0 1rem;
    padding-bottom: 6rem;
  }
`;

export const AboutHeader = styled.div`
  display: flex;
  margin: 0px auto;
  min-height: 100%;
  padding-bottom: 0px;
  max-width: 1000px;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0px 1rem 0 1rem;
  }
`;

export const AboutHeaderContainer = styled.div`
  padding-top: 5em;
  padding-left: 3.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-top: 1em;
    padding-left: 0;
    align-self: center;
    width: auto;
  }
`;


export const StyledHeading = styled.h1`
  display: flex;
  font-size: 24px;
  color: ${Colors.main_green};
  font-family: "Source Code Pro", monospace;
  font-weight: 100;

  @media screen and (max-width: 768px) {
    font-size: 2.5em;
  }

  @media screen and (min-width: 768px) {
    padding-top: 1em;
    padding-left: 0;
    width: auto;
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 10px 0px 0px;
    width: 100%;
    white-space: nowrap;

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

export const AboutContainer = styled.div`
  padding-left: 3.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
  max-width: 480px;

  @media screen and (max-width: 768px) {
    padding-top: 1em;
    padding-left: 0;
    align-self: center;
    width: auto;
  }
`;


export const TextSection = styled.div`
  font-size: 16px;
  padding-top: 1.3em;
  line-height: 1.4em;
  color: ${Colors.text_dark};
  font-family: Roboto, Arial, sans-serif;
`;

export const Photo = styled.img`
  justify-content: center;
  align-items: center;
  height: 300px;
  width: auto;
  border-radius: 2px;
  transition: 0.3s ease-in;
  align-self: center;
  margin-top: 76px;
  margin-left: 56px;

  filter: grayscale(100%);

  @media screen and (max-width: 768px) {
    filter: grayscale(100%);
    margin-top: 20px;
    margin-left: 0;
    height: 200px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  list-style: none;
  margin-top: 16px;
`;

export const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  font-family: "Source Code Pro", monospace;
  font-size: 15px;
  color: ${Colors.text_dark};
  padding-left: 15px;
  display: flex;
  align-items: center;

  &:before {
    content: "•";
    position: absolute;
    left: 0px;
    color: ${Colors.main_green};
    font-size: 15px;
    line-height: 12px;
  }
`;
