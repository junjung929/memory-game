import React from 'react';
import { Card } from '../../types';
import SingleCard from '../SingleCard/SingleCard';
import { StyledCardGrid } from './CardGrid.styles';

interface Props {
  cards: Card[];
}

const CardGrid = ({ cards }: Props) => {
  return (
    <StyledCardGrid>
      {cards.map((card) => (
        <SingleCard key={card.id} card={card} />
      ))}
    </StyledCardGrid>
  );
};

export default CardGrid;
