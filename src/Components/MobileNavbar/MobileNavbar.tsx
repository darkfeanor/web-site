import {
  MobileNavbarContainer,
  MobileNavbarLink,
  MobileNavbarWrapper,
  MobileNavbarMenu,
  MobileIcon,
  CloseIcon,
} from "./MobileNavbarElements";

interface MobileNavbarProps {
  isOpen: boolean;
  toggle: () => void;
}

const MobileNavbar = (props: MobileNavbarProps) => {
  return (
    <>
      <MobileNavbarContainer isOpen={props.isOpen} onClick={props.toggle}>
        <MobileIcon onClick={props.toggle}>
          <CloseIcon />
        </MobileIcon>

        <MobileNavbarWrapper>
          <MobileNavbarMenu>
            <MobileNavbarLink
              to="home"
              spy={true}
              smooth={true}
              onClick={props.toggle}
              offset={-80}
            >
              Home
            </MobileNavbarLink>
            <MobileNavbarLink
              to="about"
              spy={true}
              smooth={true}
              onClick={props.toggle}
              offset={-80}
            >
              About
            </MobileNavbarLink>
            <MobileNavbarLink
              to="experience"
              spy={true}
              smooth={true}
              onClick={props.toggle}
              offset={-80}
            >
              Skills
            </MobileNavbarLink>
          </MobileNavbarMenu>
        </MobileNavbarWrapper>
      </MobileNavbarContainer>
    </>
  );
};

export default MobileNavbar;
