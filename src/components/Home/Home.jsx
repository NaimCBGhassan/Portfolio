import { useEffect, useState } from "react";
import styled from "styled-components";
import GitHub from "../../assets/GitHub";
import LinkedIn from "../../assets/LinkedIn";
import { maquinaEscribir } from "../../libs/maquinaDeEscribir";

export const Home = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    let escribir = maquinaEscribir("Hi! I’m Naim and I develop FullStack Web Applications", setText, 80);
  }, []);

  return (
    <>
      <StyledHome id="Home">
        <TextAndIcons>
          <div>
            <a href="https://github.com/NaimCBGhassan" target="_blank " rel="noopener noreferrer">
              <GitHub size="45px" />
            </a>
            <a href="https://www.linkedin.com/in/naim-chaya-06a16426b" target="_blank " rel="noopener noreferrer">
              <LinkedIn size="45px" />
            </a>
          </div>
          <Texto>
            <span>{text}</span>
            <Button>CV PREVIEW</Button>
          </Texto>
        </TextAndIcons>
        <Cubo className="espacio3D">
          <div className="cubo3D">
            <aside className="cara cara1"></aside>
            <aside className="cara cara2"></aside>
            <aside className="cara cara3"></aside>
            <aside className="cara cara4"></aside>
            <aside className="cara cara5"></aside>
            <aside className="cara cara6"></aside>
          </div>
        </Cubo>
      </StyledHome>
    </>
  );
};

const StyledHome = styled.section`
  height: 100vh;
  color: white;
  padding: 5rem;
  display: flex;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }
`;

const TextAndIcons = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2.5rem;
    margin-bottom: 1.5rem;
    color: #57acdc99;
    a:hover {
      color: #57acdc;
      transform: scale(1.15);
    }
  }

  @media screen and (max-width: 768px) {
    height: 50vh;
    width: 100%;
  }
`;

const Texto = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  width: 75%;
  font-size: 45px;
  line-height: 4.5rem;

  span {
    flex: 1;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: 6vw;
    line-height: 6vw;
  }
  @media screen and (max-width: 768px) {
    font-size: 6vw;
    line-height: 7vw;
    height: 55%;
  }
  @media screen and (max-width: 428px) {
    font-size: 8vw;
    line-height: 10vw;
    height: 62%;
  }
`;

const Button = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  background-color: transparent;
  padding: 1rem;
  border: solid 2px #e91e63;
  border-radius: 0.5rem;

  &:hover {
    color: #ffffff;
    background-color: #e91e63;
  }
`;

const Cubo = styled.div`
  &.espacio3D {
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective-origin: top -50%;
    perspective: 200px;
    transform: scale(0.75);
  }
  div.cubo3D {
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    animation-name: gira;
    animation-duration: 8000ms;
    animation-iteration-count: infinite;
  }

  aside.cara {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #e91e6333;
    box-shadow: 0px 0px 5px #e91e63;

    &:hover {
      background-color: #e91e6390;
    }
  }

  @media screen and (max-width: 768px) {
    &.espacio3D {
      width: 100%;
    }
  }

  aside.cara1 {
    /* Frente */
    transform: translateZ(100px);
  }

  aside.cara2 {
    /* Atrás */
    transform: rotateY(180deg) translateZ(100px);
  }

  aside.cara3 {
    /* Izquierda */
    transform: rotateY(-90deg) translateZ(100px);
  }

  aside.cara4 {
    /* derecha */
    transform: rotateY(90deg) translateZ(100px);
  }

  aside.cara5 {
    /* abajo */
    transform: rotateX(-90deg) translateZ(100px);
  }

  aside.cara6 {
    /* arriba */
    transform: rotateX(90deg) translateZ(100px);
  }

  @keyframes gira {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;
