export const addOnIds = <T extends object>(items: T[]) => {
  return items.map((item) => ({ ...item, id: Math.random() }));
};
