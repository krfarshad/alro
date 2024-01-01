import { useEffect, useState } from "react";

export const useDynamicImage = (image: string) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  useEffect(() => {
    const path = `/assets/images/${image}`;
    const imgUrl = new URL(path, import.meta.url);
    setImageSrc(imgUrl?.href);
  }, [image]);

  return [imageSrc];
};
