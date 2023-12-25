import { loadDynamicImage } from "@/utils/loadDynamicImage";
import { useEffect, useState } from "react";
import placeholder from "@/assets/images/placeholder.png";
import { Link } from "react-router-dom";

type Props = {
  image: string;
  link?: string;
};
const Thumbnail = (props: Props) => {
  const { image, link } = props;
  const [src, setSrc] = useState<string>("");
  useEffect(() => {
    const loadImage = async () => {
      try {
        const res = await loadDynamicImage(`/src/assets/images/${image}`);
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
    <div className="w-full h-auto">
      <figure>
        {link ? (
          <Link to={`/blog/${link}`}>
            <img
              className="w-full h-full"
              src={src ? src : placeholder}
              alt="post"
            />
          </Link>
        ) : (
          <img
            className="w-full h-full"
            src={src ? src : placeholder}
            alt="post"
          />
        )}
      </figure>
    </div>
  );
};

export default Thumbnail;
