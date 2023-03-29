import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import MenuHamburgesa from "../../assets/MenuHamburgesa";
import Webhook from "../../assets/Webhook";
import { useState } from "react";
import MenuMobile from "./MenuMobile";

export const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <StyledHeader>
      <Logo href="#Home">
        <Webhook />
        <span>NaimChaya</span>
      </Logo>
      {isTabletOrMobile ? (
        <>
          <Button onClick={() => setMenuMobile(!menuMobile)}>
            <MenuHamburgesa />
          </Button>
          <MenuMobile menuMobile={menuMobile} />
        </>
      ) : (
        <div>
          <Enlaces href="#Home">Home</Enlaces>
          <Enlaces href="#About">About</Enlaces>
          <Enlaces href="#Porfolio">Porfolio</Enlaces>
          <Enlaces href="#Contact">Contact</Enlaces>
        </div>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  background-color: rgba(233, 30, 99, 0.95);
  box-shadow: 2px 0 5px #66666680;
  font-size: 1.25rem;
  color: #ffffff;
  padding: 0 0 0 2rem;

  div {
    display: flex;
    align-items: center;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    top: auto;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
  }
`;

const Logo = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Enlaces = styled.a`
  display: grid;
  place-items: center;
  height: 100%;
  width: 125px;
  transition: all 0.25s ease-in-out;

  &:hover {
    font-size: 1.5rem;
    font-weight: bold;
    color: #e91e63;
    background-color: #aaaaaa;
  }
`;

const Button = styled.button`
  margin-right: 20px;
  color: white;
  background-color: transparent;
`;
