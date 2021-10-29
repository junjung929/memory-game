import React from 'react';
import { Card } from '../../types';
import {
  StyledBackImg,
  StyledSingleCard,
  StyledFrontImg,
} from './SingleCard.styles';

interface Props {
  card: Card;
  onClick: (card: Card) => void;
}

const SingleCard = ({ card, onClick }: Props) => {
  const handleClick = () => {
    onClick(card);
  };

  return (
    <StyledSingleCard>
      <div>
        <StyledFrontImg src={card.src} alt="card front" />
        <StyledBackImg
          src="/img/cover.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </StyledSingleCard>
  );
};

export default SingleCard;
