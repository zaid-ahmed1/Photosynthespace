import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import { CardType } from "../types";

type CarouselCardType = {
  card: CardType;
};

const CarouselCard: FC<CarouselCardType> = ({ card }) => {
  return (
    <CardContainer>
      <p className="content">{card.content}</p>
      <p className="answer">{card.answer}</p>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  height: 305px;
  margin-right: 1rem;
  margin-left: 1rem;
  display: grid;
  background-color: #f5f5f7;
  border-radius: 20px;
  font-family: Helvetica Now Display;
  font-weight: 600;
  font-size: 35px;
  padding: 40px;
  align-items: center;
  .answer {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    opacity: 0;
    transition: opacity 300ms;
    font-family: Bhamious;
    font-size: 2em;
    text-align: center;
    justify-content: center;
  }
  .content {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    transition: opacity 300ms;
  }
  :hover {
    .content {
      opacity: 0;
    }
    .answer {
      opacity: 1;
    }
    background-image: linear-gradient(to bottom right, #22d593, #226d6c);
    color: white;
  }
  span {
    background-image: linear-gradient(to bottom right, #22d593, #226d6c);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export default CarouselCard;
