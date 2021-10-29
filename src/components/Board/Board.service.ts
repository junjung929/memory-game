import { Card } from '../../types';
import { addOnIds } from '../../utils/addOnId';
import { shuffle } from '../../utils/shuffle';

export const shuffleCards = (items: Card[]) => {
  const duplicated = [...items, ...items];
  const shuffled = shuffle(duplicated);
  const withIds = addOnIds(shuffled);
  return withIds;
};
