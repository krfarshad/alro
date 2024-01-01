import placeholder from "@/assets/images/placeholder.png";
import clsx from "clsx";
import { useDynamicImage } from "@/hooks/useDynamicImage";

type Props = {
  image: string;
  className?: string;
};

const Thumbnail = (props: Props) => {
  const { image, className } = props;
  const [imageSrc] = useDynamicImage(image);

  const classes = clsx(className ? className : "w-full h-full");
  return (
    <div className={classes}>
      <img
        className={classes}
        src={imageSrc ? imageSrc : placeholder}
        alt="post"
      />
    </div>
  );
};

export default Thumbnail;
