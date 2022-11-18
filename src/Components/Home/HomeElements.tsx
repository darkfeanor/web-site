import styled from "styled-components";
import { Colors } from "../../Styles/colors";

export const HomeBody = styled.div`
  margin: 0px auto;
  max-width: 1000px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    padding-bottom: 4rem;
  }
`;

export const LettersContainer = styled.div`
  font-size: 30px;

  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const HomeContainer = styled.div`
  padding-bottom: 12em;
  display: flex;
  flex-direction: column;
  min-width: 50%;

  @media screen and (max-width: 768px) {
    padding-top: 4em;
    align-items: flex-start;
    justify-content: start;
    padding-left: 0;
  }
`;

export const TypeWriter = styled.div<{ typing_direction?: string }>`
  font-size: 2.8em;
  color: white;
  max-width: fit-content;
  overflow: hidden;
  border-right: 0.15em solid ${Colors.main_green};
  white-space: nowrap;
  letter-spacing: 0.05em;

  ${({ typing_direction }) =>
    typing_direction === "forward" &&
    `
      animation: typing 4.0s steps(60, end),  blink-caret .65s step-end 8;
  `};

  ${({ typing_direction }) =>
    typing_direction === "backward" &&
    `
      animation: deleting 4.0s steps(60, end),  blink-caret .65s step-end 8;
  `};

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes deleting {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }

  @media screen and (max-width: 48em) {
    font-size: 20px;
  }
`;
