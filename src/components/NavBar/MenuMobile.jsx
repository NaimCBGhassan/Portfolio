import styled from "styled-components";

const MenuMobile = ({ menuMobile }) => {
  return (
    <StyledMenuMobile className={!menuMobile ? "menuMobileInactive" : null}>
      <Enlaces href="#Home" className="">
        Home
      </Enlaces>
      <Enlaces href="#About">About</Enlaces>
      <Enlaces href="#Portfolio">Portfolio</Enlaces>
      <Enlaces href="#Contact">Contact</Enlaces>
    </StyledMenuMobile>
  );
};

export default MenuMobile;

const StyledMenuMobile = styled.nav`
  position: fixed;
  bottom: 8vh;
  left: 0;
  right: 0;
  align-items: stretch;
  height: auto;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100vw;
  transition: bottom 0.5s ease-in-out, opacity 0.5s ease-in-out;

  &.menuMobileInactive {
    bottom: -245px;
    opacity: 0;
  }
`;

const Enlaces = styled.a`
  width: 100%;
  padding: 1rem;
  transition: all 0.25s ease-in-out;
  text-align: center;

  :nth-child(odd) {
    background-color: #55555540;
  }
  :nth-child(even) {
    background-color: #55555515;
  }
`;
