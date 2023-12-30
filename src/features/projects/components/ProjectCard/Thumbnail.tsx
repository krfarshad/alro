import { loadDynamicImage } from "@/utils/loadDynamicImage";
import { useEffect, useState } from "react";
import placeholder from "@/assets/images/placeholder.png";
import clsx from "clsx";

type Props = {
  image: string;
  className?: string;
};

const Thumbnail = (props: Props) => {
  const { image, className } = props;
  const [src, setSrc] = useState<string>("");
  useEffect(() => {
    const loadImage = async () => {
      try {
        const res = await loadDynamicImage(
          `/src/features/projects/assets/${image}`
        );
        setSrc(res);
      } catch (err) {
        throw new Error("Error loading dynamic image:");
      }
    };

    if (!src) {
      loadImage();
    }
  }, [src, image]);
  const classes = clsx(className ? className : "w-full h-full");
  return (
    <div className={classes}>
      <img className={classes} src={src ? src : placeholder} alt="post" />
    </div>
  );
};

export default Thumbnail;
