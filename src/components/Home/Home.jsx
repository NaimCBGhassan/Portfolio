import styled from "styled-components";

export const Home = () => {
  return (
    <StyledHome>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident ullam non sunt enim tempore,
      necessitatibus magni, nihil consectetur, odit officia alias quas facilis possimus accusantium saepe soluta
      doloribus error.
    </StyledHome>
  );
};

const StyledHome = styled.section`
  @keyframes typing {
    from {
      width: 0;
    }
  }
  min-height: 92vh;
  white-space: nowrap;
  color: white;
  width: 100px;
  overflow-x: hidden;
  animation: typing 1s steps(10);
`;
