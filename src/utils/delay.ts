export const delay = async (time?: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, time ?? 1000));
};
