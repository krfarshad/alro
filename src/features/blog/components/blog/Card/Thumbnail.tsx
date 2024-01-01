import placeholder from "@/assets/images/placeholder.png";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useDynamicImage } from "@/hooks/useDynamicImage";
type Props = {
  image: string;
  link?: string;
  className?: string;
};

const Thumbnail = (props: Props) => {
  const { image, link, className } = props;
  const [imageSrc] = useDynamicImage(image);

  const imgClasses = clsx(className ? className : "h-full w-full");

  return (
    <div className="w-full h-auto">
      <figure>
        {link ? (
          <Link to={`/blog/${link}`}>
            <img
              className={imgClasses}
              src={imageSrc ? imageSrc : placeholder}
              alt="post"
            />
          </Link>
        ) : (
          <img
            className={imgClasses}
            src={imageSrc ? imageSrc : placeholder}
            alt="post"
          />
        )}
      </figure>
    </div>
  );
};

export default Thumbnail;
