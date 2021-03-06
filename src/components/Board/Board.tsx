import React, { useCallback, useEffect, useState } from 'react';
import { Card } from '../../types';
import { cardImages } from '../../utils/constants';
import Button from '../Button/Button';
import CardGrid from '../CardGrid/CardGrid';
import SingleCard from '../SingleCard/SingleCard';
import { shuffleCards } from './Board.service';

interface Props {}

const Board = (props: Props) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState(false);

  const handleStart = useCallback(() => {
    const shuffledCards = shuffleCards(cardImages);

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  }, []);

  const handleChoice = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          );
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    handleStart();
  }, [handleStart]);

  return (
    <div>
      <h1>Magic Match</h1>
      <Button onClick={handleStart}>New Game</Button>
      <CardGrid
        cards={cards}
        renderCard={(card) => (
          <SingleCard
            key={card.id}
            card={card}
            onClick={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        )}
      />
      <p>Turns: {turns}</p>
    </div>
  );
};

export default Board;
