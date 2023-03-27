import styled from "styled-components";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";
import { useState } from "react";

const size = 60;

const CarouselIcons = [
  { name: "JavaScript", icon: <SiJavascript fill="yellow" size={size} /> },
  { name: "CSS3", icon: <SiCss3 fill="#264de4" size={size} /> },
  { name: "HTML5", icon: <SiHtml5 fill="#e34c26" size={size} /> },
  { name: "HTML5", icon: <SiHtml5 fill="#e34c26" size={size} /> },
];

const Carousel = () => {
  let [carouselCounter, setCarouselCounter] = useState(0);

  const resto = carouselCounter % CarouselIcons.length;
  console.log(resto);
  return (
    <StyledCarousel>
      <TfiArrowCircleLeft size={50} onClick={() => setCarouselCounter((carouselCounter -= 1))} />
      <div>
        <Icons num={carouselCounter}>
          {CarouselIcons.map((item, index) => (
            <div key={index}>
              {item.icon} <p>{item.name}</p>
            </div>
          ))}
        </Icons>
      </div>
      <TfiArrowCircleRight size={50} />
    </StyledCarousel>
  );
};

export default Carousel;

const StyledCarousel = styled.article`
  grid-column: 1/3;
  display: flex;
  align-items: center;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    grid-column: 1/2;
  }
  div {
    flex: 1;
  }
`;

const Icons = styled.div`
  flex: 1;
  display: flex;
  transform: ${(params) => {
    console.log(params.num);
    return `translateX(${params.num * 33.33333}%)`;
  }};

  transition: transform 3s ease-in-out;

  div {
    min-width: 33.33333%;
  }
`;
