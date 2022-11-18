import { TextSection } from "../About/AboutElements";

import {
  ContactBody,
  CenterContainer,
  Link,
  ContactTitle,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <ContactBody id="contact">
        <CenterContainer>
          <ContactTitle>What's next?</ContactTitle>
          <TextSection style={{ maxWidth: 700, textAlign: "center" }}>
            I'm always looking for interesting and challenging freelance
            opportunities. Whether for a potential project or just to say hi,
            I'll try my best to answer your email!
          </TextSection>
          <Link href="mailto:darkfeanor91@gmail.com">Contact me</Link>
        </CenterContainer>
      </ContactBody>
    </>
  );
};

export default Contact;
