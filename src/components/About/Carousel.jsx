import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { FaNode, FaReact } from "react-icons/fa";
import { SiJavascript, SiCss3, SiHtml5, SiRedux, SiMongodb, SiExpress } from "react-icons/si";
import { useState, useEffect } from "react";

const size = 90;

const CarouselIcons = [
  { name: "JavaScript", icon: <SiJavascript fill="rgba(233, 30, 99, 50)" size={size} /> },
  { name: "CSS3", icon: <SiCss3 fill="rgba(233, 30, 99, 50)" size={size} /> },
  { name: "HTML5", icon: <SiHtml5 fill="rgba(233, 30, 99, 50)" size={size} /> },
  { name: "NodeJS", icon: <FaNode fill="rgba(233, 30, 99, 50)" size={size} /> },
  { name: "ReactJS", icon: <FaReact fill="rgba(233, 30, 99, 50)" size={size} /> },
  { name: "Redux", icon: <SiRedux fill="rgba(233, 30, 99, 50)" size={size} /> },
  { name: "MongoDB", icon: <SiMongodb fill="rgba(233, 30, 99, 50)" size={size} /> },
  { name: "ExpressJS", icon: <SiExpress fill="rgba(233, 30, 99, 50)" size={size} /> },
];

const Carousel = () => {
  let [carouselCounter, setCarouselCounter] = useState(0);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const handleCarousel = (signal) => {
    if (signal) {
      if (isTabletOrMobile) {
        if (carouselCounter === 0) {
          return setCarouselCounter(CarouselIcons.length - 1);
        }
      } else {
        if (carouselCounter === 0) {
          return setCarouselCounter(CarouselIcons.length - 3);
        }
      }
      return setCarouselCounter((carouselCounter -= 1));
    } else {
      if (isTabletOrMobile) {
        if (CarouselIcons.length === carouselCounter + 1) {
          return setCarouselCounter(0);
        }
      } else {
        if (CarouselIcons.length === carouselCounter + 3) {
          return setCarouselCounter(0);
        }
      }
      return setCarouselCounter((carouselCounter += 1));
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      handleCarousel(false);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [carouselCounter]);

  return (
    <StyledCarousel>
      <LeftArrow size={50} onClick={() => handleCarousel(true)} />
      <div>
        <Icons num={carouselCounter}>
          {CarouselIcons.map((item, index) => (
            <div key={index}>
              {item.icon} <p>{item.name}</p>
            </div>
          ))}
        </Icons>
      </div>
      <RightArrow size={50} onClick={() => handleCarousel(false)} />
    </StyledCarousel>
  );
};

export default Carousel;

const StyledCarousel = styled.article`
  grid-column: 1/3;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  height: 200px;

  @media screen and (max-width: 768px) {
    grid-column: 1/2;
  }
  div {
    overflow-x: hidden;
    flex: 1;
  }
`;

const Icons = styled.article`
  flex: 1;
  display: flex;
  transform: ${(params) => {
    return `translateX(${params.num * -33.33333}%)`;
  }};
  transition: transform 1s ease-in-out;

  div {
    min-width: 33.33333%;
  }

  p {
    font-size: 1.4rem;
    margin-top: 0.6rem;
  }
  @media screen and (max-width: 768px) {
    transform: ${(params) => {
      return `translateX(${params.num * -100}%)`;
    }};

    div {
      min-width: 100%;
    }
  }
`;

const LeftArrow = styled(TfiArrowCircleLeft)`
  margin-left: 0.2rem;
  transition: all 0.2s ease-in-out;
  z-index: 2;
  &:hover {
    fill: #ffffff70;
    transform: scale(1.08);
  }
`;

const RightArrow = styled(TfiArrowCircleRight)`
  margin-right: 0.2rem;
  transition: all 0.2s ease-in-out;
  z-index: 2;
  &:hover {
    fill: #ffffff70;
    transform: scale(1.08);
  }
`;
