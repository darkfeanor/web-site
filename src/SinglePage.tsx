import "./Styles/App.css";

import styled from "styled-components";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Sidebar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Footer/Footer";
import MobileNavbar from "./Components/MobileNavbar/MobileNavbar";
import { useState } from "react";

const Container = styled.div`
  box-sizing: inherit;
`;

const Main = styled.div`
  margin: 0px auto;
  padding: 0px 150px;
  counter-reset: section 0;

  @media screen and (max-width: 768px) {
    padding: 0 1em 0 1em;
  }
`;

const SinglePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <Navbar toggle={toggle} />
        <MobileNavbar isOpen={isOpen} toggle={toggle} />
        <Main>
          <Home />
          <About />
          <Skills />
          <Contact />
        </Main>
        <Footer />
        <Sidebar />
      </Container>
    </>
  );
};

export default SinglePage;
