import React from "react";
import styled from "@emotion/styled";
import Swiper from "react-slick";
import "./carousel.css";
import CarouselCard from "./CarouselCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CardType } from "../types";

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    className: "hey",
  };

  const slider = React.useRef<Swiper>(null);

  return (
    <CarouselContainer>
      <Swiper ref={slider} {...settings}>
        {cards.map((card, index) => (
          <CarouselCard card={card} key={index} />
        ))}
      </Swiper>

      <CarouselControlContainer>
        <button
          className="carousel-control"
          onClick={() => slider?.current?.slickPrev()}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="carousel-control"
          onClick={() => slider?.current?.slickNext()}
        >
          <IoIosArrowForward />
        </button>
      </CarouselControlContainer>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  margin-top: -40px;
  justify-content: center;
  align-items: center;
`;

const CarouselControlContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const cards: CardType[] = [
  {
    content: (
      <p>
        Is Photosynthespace a <span> productivity tool? </span>
      </p>
    ),
    answer: "yup",
  },
  {
    content: (
      <p>
        Does it provide <span>advice</span> to tackle my goals?
      </p>
    ),
    answer: "of course",
  },
  {
    content: (
      <p>
        Can I grow plants that represent <span>my goals</span>?
      </p>
    ),
    answer: "definitely",
  },
  {
    content: (
      <p>
        Could it encourage me to <span>finish & check off my goals</span>?
      </p>
    ),
    answer: "for sure",
  },
  {
    content: (
      <p>
        Is it <span>reliable</span> and <span>effective</span>?
      </p>
    ),
    answer: "on god",
  },
];
export default Carousel;
