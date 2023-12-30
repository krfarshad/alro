import { loadDynamicImage } from "@/utils/loadDynamicImage";
import { useEffect, useState } from "react";
import placeholder from "@/assets/images/placeholder.png";

type Props = {
  image: string;
};

const Thumbnail = (props: Props) => {
  const { image } = props;
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

  return (
    <div className="w-full h-full">
      <img className="w-full h-full" src={src ? src : placeholder} alt="post" />
    </div>
  );
};

export default Thumbnail;
