import {
  AboutBody,
  AboutHeader,
  AboutHeaderContainer,
  AboutContainer,
  StyledHeading,
  Photo,
  TextSection,
  List,
  Skill,
} from "./AboutElements";

import photo from "./../../Assets/profile.jpg";

const About = () => {
  const skills = [
    ".NET Core",
    "Java Spring Boot",
    "Web Development",
    "Architecture Design",
    "DevOps",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Azure",
    "AWS",
  ];
  return (
    <>
    <AboutHeader id="about">
      <AboutHeaderContainer>
        <StyledHeading>About Me</StyledHeading>
      </AboutHeaderContainer>
    </AboutHeader>
    <AboutBody>
        <AboutContainer>
          <TextSection>

            I have more than 7 years of experience working as a Software Engineer. 
            Working for small startups and large international organizations helped 
            me become a proficient full-stack developer. My experiences focused on 
            building scalable web and cross-platform applications using modern web technologies.
          </TextSection>
          <TextSection>
          I'm a passionate agile software developer with a detailed and thorough approach. 
          I previously worked with teams of multiple sizes, providing guidance and 
          introducing agile methods that allowed customers to realize their product vision.
          </TextSection>
          <TextSection>
          I'm motivated by product success and not technology for technology's sake.
          </TextSection>
          <TextSection>Here are a few things I'm experienced at:</TextSection>
          <List>
            {skills.map((skill: string, index: number) => (
              <Skill key={index}>{skill}</Skill>
            ))}
          </List>
        </AboutContainer>
        <AboutContainer>
          <Photo src={photo} />
        </AboutContainer>
      </AboutBody>
    </>
  );
};

export default About;
