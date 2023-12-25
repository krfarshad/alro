import { loadDynamicImage } from "@/utils/loadDynamicImage";
import { useEffect, useState } from "react";
import placeholder from "@/assets/images/placeholder.png";
import { Link } from "react-router-dom";
import clsx from "clsx";

type Props = {
  image: string;
  link?: string;
  className?: string;
};
const Thumbnail = (props: Props) => {
  const { image, link, className } = props;
  const [src, setSrc] = useState<string>("");
  const imgClasses = clsx(className ? className : "h-full w-full");

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
              className={imgClasses}
              src={src ? src : placeholder}
              alt="post"
            />
          </Link>
        ) : (
          <img
            className={imgClasses}
            src={src ? src : placeholder}
            alt="post"
          />
        )}
      </figure>
    </div>
  );
};

export default Thumbnail;
