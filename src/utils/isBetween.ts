export const isBetween = (
  number: number,
  min?: number,
  max?: number
): boolean => {
  return number >= (min ?? 0) && number <= (max ?? 100);
};
