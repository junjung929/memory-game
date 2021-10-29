import React, { useCallback, useState } from 'react';
import { Card } from '../../types';
import { cardImages } from '../../utils/constants';
import Button from '../Button/Button';
import CardGrid from '../CardGrid/CardGrid';
import { shuffleCards } from './Board.service';

interface Props {}

const Board = (props: Props) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);

  const handleClick = useCallback(() => {
    const shuffledCards = shuffleCards(cardImages);
    setCards(shuffledCards);
    setTurns(0);
  }, []);

  return (
    <div>
      <h1>Magic Match</h1>
      <Button onClick={handleClick}>New Game</Button>
      <CardGrid cards={cards} />
    </div>
  );
};

export default Board;
