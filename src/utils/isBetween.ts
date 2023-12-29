import { Range } from "@/types";

export const isBetween = (number: number, value: Range): boolean => {
  const { max, min } = value;
  return number >= (min ?? 0) && number <= (max ?? 100);
};
