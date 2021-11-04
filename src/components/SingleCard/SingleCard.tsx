import React from 'react';
import { Card } from '../../types';
import { StyledSingleCard, StyledSingleCardWrapper } from './SingleCard.styles';

interface Props {
  card: Card;
  onClick: (card: Card) => void;
  flipped: boolean;
  disabled: boolean;
}

const SingleCard = ({ card, onClick, flipped, disabled }: Props) => {
  const handleClick = () => {
    !disabled && onClick(card);
  };

  return (
    <StyledSingleCard>
      <StyledSingleCardWrapper flipped={flipped}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="card back"
          onClick={handleClick}
        />
      </StyledSingleCardWrapper>
    </StyledSingleCard>
  );
};

export default SingleCard;
