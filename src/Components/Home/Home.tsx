import { useRef } from "react";
import { useState, useEffect } from "react";
import { Colors } from "../../Styles/colors";
import { Link } from "../Contact/ContactElements";
import CustomLetter from "../Letter/Letter";
import { HomeBody, HomeContainer, TypeWriter,LettersContainer } from "./HomeElements";
import pdf from "./../../Assets/Lebenslauf.pdf";

const typewriterStrings: string[] = [
  "I'm a Software Developer",
  "I'm a DevOps Engineer",
  "I'm a Freelancer",
  "I'm a Cloud Engineer"
];

const Home = () => {
  const letters: JSX.Element[] = [];

  const name: string = "Denis Filimonov \n";
  for (let i = 0; i < name.length; i += 1) {
    if (name[i] === "\n") {
      letters.push(
        <br
          key={Math.random().toString()}
          style={{ backgroundColor: "transparent" }}
        />
      );
    } else if (name[i] === " ") {
      letters.push(
        <span
          key={Math.random().toString()}
          style={{ backgroundColor: "transparent" }}
        >
          &nbsp;
        </span>
      );
    } else {
      letters.push(
        <CustomLetter key={Math.random().toString()}>{name[i]}</CustomLetter>
      );
    }
  }

  const [text, setText] = useState(typewriterStrings[0]);
  const [direction, setDirection] = useState("forward");
  const index = useRef(0);

  /**
   * Changing typing direction every 'timeInterval' milliseconds and changing the word every two changes of direction.
   */
  const timeInterval: number = 3900;
  useEffect(() => {
    const interval = setInterval(() => {
      if (index.current >= typewriterStrings.length) {
        index.current = 0;
      }

      if (direction === "backward") {
        setText(typewriterStrings[index.current]);
      }

      if (direction === "forward") {
        setDirection("backward");
        index.current += 1;
      } else if (direction === "backward") {
        setDirection("forward");
      }
    }, timeInterval);
    return () => {
      clearInterval(interval);
    };
  }, [direction]);

  return (
    <>
      <HomeBody id="home" style= {{ alignItems: "center"}}>
        <HomeContainer style={{ alignItems: "center" }}>
          <span
            style={{
              fontSize: 20,
              marginBottom: 8,
              color: Colors.main_green,
              fontFamily: `"Source Code Pro", monospace`,
            }}
          >
            Hi there, my name is
          </span>
          <LettersContainer>{letters}</LettersContainer>

          <TypeWriter
            key={Math.random().toString()}
            typing_direction={direction}
            style={{ fontSize: 26, color: Colors.text_dark }}
          >
            {text}
          </TypeWriter>
          <div
            style={{
              marginTop: 30,
              color: Colors.text_dark,
              textAlign: "center"
            }}
          >
            <Link href={pdf} download="Lebenslauf.pdf" style={{ margin: 0}}>Download my CV</Link>
          </div>
        </HomeContainer>
      </HomeBody>
    </>
  );
};

export default Home;
