import styled from "styled-components";
import Carousel from "./Carousel";

export const About = () => {
  return (
    <StyledAbout id="About">
      <Text>
        <h3>I'm Full Stack MERN developer & Civil Engeneer</h3>
        <p>
          I started my path in web development in the year 2021 while completing my university studies. I have carried
          out many personal projects along this beautiful journey. These projects that I have done have improved my
          skills as a web programmer. On the other hand, I learned a lot about teamwork, task scheduling, and team
          leadership while in college.
          {/* <br /> As a self-taught learner, I am always seeking to expand my knowledge and satisfy my curiosity. My
          strong sense of responsibility and drive to grow, both personally and professionally, are at the forefront of
          my pursuits. Above all, I strive to be a kind and compassionate person, embodying these qualities in both my
          personal and professional life. */}
        </p>
      </Text>
      <Image src="/FotoPefil.jpeg" alt="Pesonal Photo" />
      <Carousel />
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  min-height: 100vh;
  background: linear-gradient(180deg, #55555530, transparent);
  color: white;
  padding: 5rem;
  text-align: center;
  display: grid;
  grid-template-columns: 3fr 2fr;

  @media screen and (max-width: 768px) {
    padding: 2rem;
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div`
  h3 {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.7rem;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  object-position: top;
  margin: 0 auto;
  /*  filter: grayscale(100%); */
  border-radius: 50%;
`;
