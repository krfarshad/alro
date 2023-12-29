export const delay = async (time?: number): Promise<void> => {
  await setTimeout(() => {}, time ?? 1000);
};
