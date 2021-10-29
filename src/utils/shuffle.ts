export const shuffle = <T extends unknown>(items: T[]) => {
  return [...items].sort(() => Math.random() - 0.5);
};
