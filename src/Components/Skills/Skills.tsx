import { useCallback, useState } from "react";
import { StyledHeading } from "../About/AboutElements";
import {
  SkillsBody,
  SkillsContainer,
  TabsContainer,
  TabsList,
  Job,
  JobDescription,
  Position,
  Duration,
  Description,
  List,
  Skill,
  SkillsHeader,
  SkillsHeaderContainer
} from "./SkillsElements";

enum Companies {
  SARACUS_CONSALTING = "Saracus Consulting ",
  UNIVERSITY = "Westfälische Wilhelms-Universität Münster",
  SALT_PAPER = "Salt and Pepper Software",
  THINKPORT = "Thinkport",
  ING_DIBA = "ING Diba",
  FREELANCE = "Freelance",
}

const content: { [key: string]: any } = {
  [Companies.FREELANCE]: {
    company: Companies.FREELANCE,
    position: "Software Developer and DevOps Engineer",
    duration: "2020 - Present",
    description: "While working as a freelancer, I've developed various custom software for clients across Germany. As a part of my job, I help customers with architecture designs, project management, infrastructure configurations, DevOps and CI/CD. I do backend and frontend development, cloud engineering and work on optimizing and refactoring of customers applications. As a consulting part of my work, I also help customers with mentoring and supporting other developers.",
    topSkills: [".NET Core", "Azure", "Kubernetes"]
  },
  [Companies.ING_DIBA]: {
    company: Companies.ING_DIBA,
    position: "Software Developer",
    duration: "2019 - 2020",
    description:
      "During my time at ING, one of the biggest banks in Europe, I worked as a Software developer for container lifecycle management system with Java Spring Boot. My main focuses were DevOps and CI/CD with Openshift, Podman, Buildah on Jenkins.",
      topSkills: ["Java Spring", "Openshift", "Jenkins"]
    },
  [Companies.THINKPORT]: {
    company: Companies.THINKPORT,
    position: "Cloud Engineer",
    duration: "2019 - 2020",
    description:
      "Working as a Cloud Engineer at Thinkport made me proficient with various cloud providers such as Azure, AWS, and Google Cloud. In addition, I worked on application backend development using Python on pySpark and .Net Core. I also worked with deployments in Kubernetes, CI/CD pipelines and creating custom infrastructures with Terraform and Cloud Formation.",
      topSkills: ["AWS", "Python", "Terraform"]
    },
  [Companies.SALT_PAPER]: {
    company: Companies.SALT_PAPER,
    position: "Software Developer",
    duration: "2015 - 2019",
    description:
      "As a Backend Developer, I created a big variety of REST APIs with .NET Core and Java Spring Boot. Being proficient in AWS and Azure, among other things, I was tasked with developing serverless and cloud applications. I also created microservices, worked with Big Data, and developed backend and frontend using .NET/Java and Angular, respectively, as well as native applications using Go Lang.",
      topSkills: [".NET Core", "Angular", "GO Lang"]
    },
  [Companies.SARACUS_CONSALTING]: {
    company: Companies.SARACUS_CONSALTING,
    position: "Senior Software Developer",
    duration: "2014 - 2015",
    description:
      "While working for Saracus Consulting I focused on native Java development and providing Social Media Analysis on Hadoop using Social Media APIs as well as mentoring of students.",
      topSkills: ["Java", "Hadoop", "Shell"]
    },
  [Companies.UNIVERSITY]: {
    company: Companies.UNIVERSITY,
    position: "Tutor",
    duration: "2013 - 2015",
    description:
      "During my studies, I worked as a tutor for Computer Science modules I, II and Databases module I. I also took over mentoring tasks and held additional practice lessons for Software Praxis module.",
      topSkills: ["Java", "SQL", "Scrum"]
    },
};

const Skills = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>(
    Companies.FREELANCE
  );

  const handleCompany = useCallback((company: any) => {
    setSelectedCompany(company);
  }, []);

  return (
    <>
    <SkillsHeader id="experience">
      <SkillsHeaderContainer>
        <StyledHeading>Experience</StyledHeading>
      </SkillsHeaderContainer>
    </SkillsHeader>
      <SkillsBody>
        <SkillsContainer>
          <TabsContainer>
            <TabsList>
              {Object.values(Companies).map((company: Companies) => (
                <Job
                  key={company}
                  className={
                    company === content[selectedCompany].company ? "active" : ""
                  }
                  onClick={() => handleCompany(company)}
                >
                  <span>{company}</span>
                </Job>
              ))}
            </TabsList>
            <JobDescription>
              <Position>{content[selectedCompany].position}</Position>
              <Duration>{content[selectedCompany].duration}</Duration>
              <Description>{content[selectedCompany].description}</Description>
              <List>
            {content[selectedCompany].topSkills.map((skill: string, index: number) => (
              <Skill key={index}>{skill}</Skill>
            ))}
          </List>
            </JobDescription>
          </TabsContainer>
        </SkillsContainer>
      </SkillsBody>
    </>
  );
};

export default Skills;
