import styled from "styled-components";
import GitHub from "../../assets/GitHub";
import { MdWebAsset } from "react-icons/md";

const CardInfo = [
  {
    title: "OnlineShop",
    path: "/OnlineShop.jpg",
    url: "https://onlineshopmernproject.netlify.app/",
    gitHub: "https://github.com/NaimCBGhassan/OnlineShop",
  },
  {
    title: "JWT Authentificacion",
    path: "/Auth.jpg",
    url: "",
    gitHub: "https://github.com/NaimCBGhassan/2-mern-JWT",
  },
  {
    title: "Taller de Maquetación",
    path: "/TallerDeMaquetacion.jpg",
    url: "https://naimcbghassan.github.io/taller-maquetacion/portafolio-cv/",
    gitHub: "https://github.com/NaimCBGhassan/taller-maquetacion",
  },
  {
    title: "Taller de Maquetación",
    path: "/TallerDeMaquetacion.jpg",
    url: "https://naimcbghassan.github.io/taller-maquetacion/portafolio-cv/",
    gitHub: "https://github.com/NaimCBGhassan/taller-maquetacion",
  },
  {
    title: "Taller de Maquetación",
    path: "/TallerDeMaquetacion.jpg",
    url: "https://naimcbghassan.github.io/taller-maquetacion/portafolio-cv/",
    gitHub: "https://github.com/NaimCBGhassan/taller-maquetacion",
  },
  {
    title: "Taller de Maquetación",
    path: "/TallerDeMaquetacion.jpg",
    url: "https://naimcbghassan.github.io/taller-maquetacion/portafolio-cv/",
    gitHub: "https://github.com/NaimCBGhassan/taller-maquetacion",
  },
  {
    title: "Taller de Maquetación",
    path: "/TallerDeMaquetacion.jpg",
    url: "https://naimcbghassan.github.io/taller-maquetacion/portafolio-cv/",
    gitHub: "https://github.com/NaimCBGhassan/taller-maquetacion",
  },
  {
    title: "Taller de Maquetación",
    path: "/TallerDeMaquetacion.jpg",
    url: "https://naimcbghassan.github.io/taller-maquetacion/portafolio-cv/",
    gitHub: "https://github.com/NaimCBGhassan/taller-maquetacion",
  },
];

export const Porfolio = () => {
  return (
    <StyledPorfolio id="Porfolio">
      <Title>PROJECTS</Title>
      <CardsContainer>
        {CardInfo.map((card, index) => (
          <Card key={index} href={card.url}>
            <Image src={card.path} alt={card.title} />
            <TextContainer>
              <h4>{card.title}</h4>
              <div>
                <a href={card.gitHub} target="_blank " rel="noopener noreferrer">
                  <GitHub size="35px" />
                </a>
                <a href={card.url} target="_blank " rel="noopener noreferrer">
                  <MdWebAsset size="45px" />
                </a>
              </div>
            </TextContainer>
          </Card>
        ))}
      </CardsContainer>
    </StyledPorfolio>
  );
};

const StyledPorfolio = styled.section`
  min-height: 100vh;
  background: linear-gradient(180deg, #55555530, transparent);
  color: white;
  padding: 5rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h3`
  font-size: 3rem;
  line-height: 3rem;
  margin-bottom: 3rem;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-items: center;
  gap: 3rem;
`;

const Card = styled.article`
  background-color: #00000090;
  border-radius: 0.5rem;
  box-shadow: 0.25rem 0.25rem 0.3rem #66666650;
  transition: all 0.25s ease-in;

  &:hover {
    transform: scale(1.03);
    /*  margin: 0 0.5rem 0.5rem 0; */
  }
`;

const TextContainer = styled.div`
  padding-bottom: 0.4rem;
  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.4rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #57acdc;
    transition: all 0.25s ease-in;

    a:hover {
      color: #57acdc99;
    }
  }
`;

const Image = styled.img`
  height: 100%;
  background-color: transparent;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0.5rem 0.5rem 0 0;
`;
