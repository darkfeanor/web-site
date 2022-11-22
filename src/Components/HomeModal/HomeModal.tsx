import React, { ReactNode } from "react";
import { useState } from "react";
import { HomeModalBox, HomeModalOverlay, HomeModalButton, HomeModalHeader } from "./HomeModalElements";
import pdf_en from "./../../Assets/Lebenslauf_en.pdf";
import pdf_de from "./../../Assets/Lebenslauf_de.pdf";


interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <HomeModalOverlay onClick={props.toggle}>
          <HomeModalBox onClick={(e) => e.stopPropagation()}>
            {props.children}
            <HomeModalHeader> Which language do you prefer?</HomeModalHeader>
            <HomeModalButton href={pdf_en} download="CV.pdf">English</HomeModalButton>
            <HomeModalButton href={pdf_de} download="Lebenslauf.pdf">Deutsch</HomeModalButton>   
          </HomeModalBox>
        </HomeModalOverlay>
      )}
    </>
  );
}

export function useModal() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return {
    isOpen,
    toggle
  };
}
