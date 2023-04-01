import styled from "styled-components";
import GitHub from "../../assets/GitHub";
import { CgBrowser } from "react-icons/cg";

const Modal = ({ open, setOpen }) => {
  return (
    <StyledModal onClick={() => setOpen(null)}>
      <Card>
        <div>
          <ImageContainer>
            <img src={open.path} />
          </ImageContainer>
          <TextContainer>
            <h3>DESCRIPTION</h3>
            <div>
              {open.description}
              <ul>
                {open.user && (
                  <li>
                    <strong> User: </strong>
                    {open.user}
                  </li>
                )}
                {open.password && (
                  <li>
                    <strong>Password:</strong> {open.password}
                  </li>
                )}
              </ul>
            </div>
            <nav>
              <a href={open.gitHub} target="_blank " rel="noopener noreferrer">
                <GitHub size="20px" />
              </a>
              <a href={open.url} target="_blank " rel="noopener noreferrer">
                <CgBrowser size="20px" />
              </a>
            </nav>
          </TextContainer>
        </div>
      </Card>
    </StyledModal>
  );
};

export default Modal;

const StyledModal = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 100;
  display: grid;
  place-items: center;
`;

const Card = styled.article`
  background-color: white;
  height: 300px;
  width: 600px;
  padding: 1rem;
  border-radius: 0.2rem;
  & > div {
    border: solid 0.13rem rgba(233, 30, 99, 0.75);
    height: 100%;
    width: 100%;
    display: flex;
  }

  @media screen and (max-width: 768px) {
    height: 580px;
    width: 310px;
    padding: 1rem;
    border-radius: 0.2rem;
    & > div {
      border: solid 0.13rem rgba(233, 30, 99, 0.75);
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  line-height: 0;
  flex: 1;
  img {
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    flex: 1;
    img {
      width: 100%;
    }
  }
`;

const TextContainer = styled.div`
  margin: 1rem;
  flex: 1;
  line-height: 1.5;
  text-align: center;

  h3 {
    margin-bottom: 0.5rem;
  }

  div {
    height: 63%;
    ul {
      margin-left: 1rem;
      margin-top: 0.8rem;
      text-align: left;
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1.5rem;

    a {
      display: grid;
      place-items: center;
      color: #ffffff;
      background-color: #018c9c;
      height: 2.3rem;
      width: 3.5rem;
      border-radius: 0.2rem;
    }

    a:hover {
      transform: scale(1.15);
    }
  }
`;
