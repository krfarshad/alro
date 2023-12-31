export const loadDynamicImage = async (path: string) => {
  const response = await import(path);
  return await response.default;
};
