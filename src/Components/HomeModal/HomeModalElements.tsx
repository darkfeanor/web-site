import styled from "styled-components";
import { Colors } from "../../Styles/colors";

export const HomeModalOverlay = styled.div`
   z-index: 9999;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;


export const HomeModalBox = styled.div`
display: block;
background: ${Colors.black};
width: 500px;
padding: 1rem;
border-radius: 1rem;
margin: 0;
padding: 0;
border-radius: 2px;
border: 1px solid ${Colors.main_green};

@media screen and (max-width: 768px) {
    width: 70%;
}
`;


export const HomeModalButton = styled.a`
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
margin-bottom: 18px;


margin-right: 18px;
margin-left: 18px;


transition: 500ms;
font-family: "Source Code Pro", monospace;

&:hover {
  background-color: ${Colors.light_green};
}

@media screen and (max-width: 768px) {
    margin-bottom: 20px;
    margin-top: 0px;
}
`;





export const HomeModalHeader = styled.h1`
  font-size: 26px;
  color: white;
  font-family: "Open Sans", Arial, sans-serif;
  font-weight: 100;
  padding: 0;
  @media screen and (max-width: 768px) {
    font-size: 1.5em;
    margin: 1.5em;
  }

  @media screen and (min-width: 768px) {
    padding-top: 1em;
    padding-left: 0;
    width: auto;
  }
`;