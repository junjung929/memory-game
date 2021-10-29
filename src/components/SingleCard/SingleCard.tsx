import React from 'react';
import { Card } from '../../types';
import {
  StyledBackImg,
  StyledSingleCard,
  StyledFrontImg,
} from './SingleCard.styles';

interface Props {
  card: Card;
}

const SingleCard = ({ card }: Props) => {
  return (
    <StyledSingleCard>
      <div>
        <StyledFrontImg src={card.src} alt="card front" />
        <StyledBackImg src="/img/cover.png" alt="card back" />
      </div>
    </StyledSingleCard>
  );
};

export default SingleCard;
