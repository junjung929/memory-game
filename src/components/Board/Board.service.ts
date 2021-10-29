import { Card } from '../../types';
import { addOnIds } from '../../utils/addOnId';
import { shuffle } from '../../utils/shuffle';

export const shuffleCards = <T extends Omit<Card, 'id'>>(cards: T[]) => {
  const duplicated = [...cards, ...cards];
  const shuffled = shuffle(duplicated);
  const withIds = addOnIds(shuffled) as Card[];
  return withIds;
};
