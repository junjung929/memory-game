import React, { ReactNode } from 'react';
import { Card } from '../../types';
import { StyledCardGrid } from './CardGrid.styles';

interface Props {
  cards: Card[];
  renderCard: (card: Card) => ReactNode;
}

const CardGrid = ({ cards, renderCard }: Props) => {
  return (
    <StyledCardGrid>{cards.map((card) => renderCard(card))}</StyledCardGrid>
  );
};

export default CardGrid;
