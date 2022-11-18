import styled from "styled-components";
import { Colors } from "../../Styles/colors";

export const SkillsBody = styled.div`
  margin: 0px auto;
  padding-bottom: 150px;
  max-width: 1000px;
  position: relative;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 1em 0 1em;
    padding-bottom: 5em;
  }
`;


export const SkillsHeader = styled.div`
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

export const SkillsHeaderContainer = styled.div`
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


export const SkillsContainer = styled.div`
  padding-top: 0.5em;
  padding-left: 3.5rem;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  @media screen and (max-width: 768px) {
    padding-top: 2em;
    padding-left: 0;
    align-self: center;
  }
`;

export const Text = styled.div`
  font-size: 1.4em;
  padding-top: 1.3em;
  line-height: 1.4em;
  color: white;
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-top: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
`;

export const TabsList = styled.ul`
  list-style: none;
  flex-direction: column;
  display: flex;
  width: max-content;
  flex: 1;
  flex-direction: column-reverse;

  @media screen and (max-width: 768px) {
    display: flex;
    position: relative;
    margin-bottom: 30px;
    width: 100%;
    overflow-x: scroll;
    flex-direction: row-reverse;
    grid-template-columns: repeat(3, minmax(140px, 200px));
  }
`;

export const Job = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-left: 2px solid ${Colors.light_grey};
  padding: 8px 12px;
  color: ${Colors.light_grey};

  font-family: "Source Code Pro", monospace;
  font-size: 15px;

  &.active {
    color: ${Colors.main_green};
    border-left: 2px solid ${Colors.main_green};
  }

  &:hover {
    background-color: ${Colors.light_green};
    color: ${Colors.main_green};
    transition: all 0.4s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    border: none;

    &.active {
      border-left: none;
      color: ${Colors.main_green};
      border-bottom: 2px solid ${Colors.main_green};
    }
  }
`;

export const JobDescription = styled.div`
  position: relative;
  padding-top: 5px;
  padding-left: 30px;
  -webkit-box-flex: 1;
  flex: 3;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
    align-self: center;
    width: 100%;
    line-height: 1.4em;
  }
`;

export const Position = styled.p`
  font-size: 22px;
  margin-bottom: 14px;
  font-family: "Open Sans", Arial, sans-serif;
  color: white;
`;

export const Duration = styled.p`
  font-family: "Source Code Pro", monospace;
  font-size: 15px;
  color: ${Colors.light_grey};
`;

export const Description = styled.p`
  margin-top: 16px;
  color: ${Colors.text_dark};
`;


export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 200px));
  overflow: hidden;
  list-style: none;
  margin-top: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(100px, 200px));
  }

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
