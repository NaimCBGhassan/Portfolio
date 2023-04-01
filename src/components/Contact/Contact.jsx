import styled from "styled-components";
import { SiGmail, SiLinkedin, SiWhatsapp, SiGithub } from "react-icons/si";

const size = "30px";

const CardInfo = [
  {
    name: "LinkedIn",
    contact: "https://www.linkedin.com/in/naimchaya",
    icon: <SiLinkedin size={size} />,
  },
  {
    name: "Email",
    contact:
      "mailto:naimchaya.dev@gmail.com?subject=Contact%20From%20Porfolio&body=Hi!%20I%20visit%20you%20from%20your%20personal%20porfolio",
    icon: <SiGmail size={size} />,
  },
  {
    name: "WhatsApp",
    contact:
      "https://api.whatsapp.com/send?phone=543413227984&text=Hi!%20I%20visit%20you%20from%20your%20personal%20porfolio",
    icon: <SiWhatsapp size={size} />,
  },
  {
    name: "GitHub",
    contact: "https://github.com/NaimCBGhassan",
    icon: <SiGithub size={size} />,
  },
];

export const Contact = () => {
  return (
    <StyledPorfolio id="Contact">
      {CardInfo.map((info, index) => (
        <a key={index} href={info.contact} target="_blank " rel="noopener noreferrer">
          <p>{info.icon}</p>
          <p>{info.name}</p>
        </a>
      ))}
    </StyledPorfolio>
  );
};

const StyledPorfolio = styled.section`
  background: #55555525;
  color: #e91e63;
  padding: 1rem;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 100%;
  gap: 1rem;
  cursor: pointer;

  div:hover {
    transform: scale(1.2);
    color: rgba(255, 255, 255, 10);
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
    padding-bottom: 5rem;
  }
`;
