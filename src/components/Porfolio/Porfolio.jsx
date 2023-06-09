import styled from "styled-components";
import GitHub from "../../assets/GitHub";
import { CgBrowser } from "react-icons/cg";
import { useState } from "react";
import Modal from "./Modal";

const CardInfo = [
  {
    title: "MoonFlix",
    path: "/moonflix.jpg",
    url: "https://moonflixngc.netlify.app/",
    gitHub: "https://github.com/NaimCBGhassan/Movies",
    description: "MoonFlix is website where you will be able to see all of you favorites movies and TV series",
  },
  {
    title: "OnlineShop",
    path: "/OnlineShop.jpg",
    url: "https://onlineshopmernproject.netlify.app/",
    gitHub: "https://github.com/NaimCBGhassan/OnlineShop",
    description: "OnlineShop is a place where you will be able to find the best phones at the lowest price",
    user: "Admin1",
    password: "Admin1",
  },
  {
    title: "FinanceDashboard",
    path: "/finance.png",
    url: "https://financedashboardnc.netlify.app/",
    gitHub: "https://github.com/NaimCBGhassan/Finance-Dashboard",
    description: "This is a panel where you will be able to find your business metrics and analytics.",
  },
  {
    title: "ApiRest",
    path: "/ApiRest.jpg",
    url: "https://api-rest-nc.up.railway.app/",
    gitHub: "https://github.com/NaimCBGhassan/ApiRest",
    description: "A ApiRest where you will find 3 endpoint (Item, Auth & Orders)",
  },
  {
    title: "AuthJWT",
    path: "/Auth.jpg",
    url: "https://naimchaya-authjwt.up.railway.app/",
    gitHub: "https://github.com/NaimCBGhassan/2-mern-JWT",
    description:
      "AuthJWT is a page where you can register or login and your sensitive data will be protected for JWT system",
    user: "Admin",
    password: "Admin",
  },
  {
    title: "FormuPics",
    path: "/FormuPics.jpg",
    url: "https://formupics-project.up.railway.app/",
    gitHub: "https://github.com/NaimCBGhassan/FormuPics",
    description: "FormuPics is a page where you can create, update and delete a post.",
  },
  {
    title: "Taller de Maquetación",
    path: "/TallerDeMaquetacion.jpg",
    url: "https://naimcbghassan.github.io/taller-maquetacion/portafolio-cv/",
    gitHub: "https://github.com/NaimCBGhassan/taller-maquetacion",
    description: "Taller de maquetacion is a project where you can find my (fictitious) information",
  },
  {
    title: "Coffee Blog",
    path: "/CoffeeBlog.jpg",
    url: "https://naimchaya-coffee-blog.netlify.app/",
    gitHub: "https://github.com/NaimCBGhassan/Blog-de-cafe",
    description: "Hi! Welcome to the best Coffee Blog with courses and tips for drinking coffee",
  },
  {
    title: "FrontEnd Store",
    path: "/FrontendStore.jpg",
    url: "https://naimchaya-frontend-store.netlify.app/",
    gitHub: "https://github.com/NaimCBGhassan/FrontEnd-Store",
    description: "Hi! This a Online Store created for the sale of developer T-shirts",
  },
  {
    title: "Freelancer Developer",
    path: "/FreelancerDeveloper.jpg",
    url: "https://naimchaya-freelancer.netlify.app/",
    gitHub: "https://github.com/NaimCBGhassan/FreelancerDeveloper",
    description: "Hi! I'm Naim Chaya, Freelancer web developer",
  },
];

export const Porfolio = () => {
  const [hover, setHover] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (card) => {
    setOpen(card);
  };

  return (
    <>
      <StyledPorfolio id="Porfolio">
        <Title>PROJECTS</Title>
        <CardsContainer>
          {CardInfo.map((card, index) => {
            return (
              <Card key={index} href={card.url} onClick={() => handleClick(card)}>
                <ImageContainer onMouseOut={() => setHover(null)} onMouseOver={() => setHover(index)}>
                  <div>{index === hover && <Description> {card.description} </Description>}</div>
                  <Image src={card.path} alt={card.title} />
                </ImageContainer>
                <TextContainer>
                  <h4>
                    <i>{card.title}</i>
                  </h4>
                </TextContainer>
              </Card>
            );
          })}
        </CardsContainer>
      </StyledPorfolio>
      {open && <Modal open={open} setOpen={setOpen} />}
    </>
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
    margin: 0.6rem;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    margin-bottom: 0.5rem;

    a {
      display: grid;
      place-items: center;
      color: #ffffff;
      background-color: #57acdc99;
      height: 2rem;
      width: 2.8rem;
      border-radius: 0.2rem;
    }

    a:hover {
      transform: scale(1.15);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  line-height: 0;
  cursor: pointer;

  div {
    border-radius: 0.5rem 0.5rem 0 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
  }

  div:hover {
    background: rgba(233, 30, 99, 0.75);
    p {
      border: solid 2.5px white;
    }
  }
`;

const Description = styled.p`
  height: 100%;
  padding: 1.8rem;
  font-size: 0.9rem;
  line-height: 2.5rem;
`;

const Image = styled.img`
  height: 100%;
  background-color: transparent;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 0.5rem 0.5rem 0 0;
`;
