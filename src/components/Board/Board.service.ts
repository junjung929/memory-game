import { Card } from '../../types';
import { addOnIds } from '../../utils/addOnId';
import { shuffle } from '../../utils/shuffle';

export const shuffleCards = <T extends Omit<Card, 'id'>>(items: T[]) => {
  const duplicated = [...items, ...items];
  const shuffled = shuffle(duplicated);
  const withIds = addOnIds(shuffled) as Card[];
  return withIds;
};
