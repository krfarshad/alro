export const getExcerpt = (content: string, length?: number) => {
  const words = content.split(" ");
  const max = length ? length : 20;
  let excerpt = words.slice(0, max).join(" ");
  if (words.length > max) {
    excerpt = excerpt + "...";
  }
  return excerpt;
};
