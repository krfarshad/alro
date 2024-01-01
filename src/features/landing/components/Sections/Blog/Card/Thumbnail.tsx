import placeholder from "@/assets/images/placeholder.png";
import { useDynamicImage } from "@/hooks/useDynamicImage";

type Props = {
  image: string;
};
const Thumbnail = (props: Props) => {
  const { image } = props;
  const [imageSrc] = useDynamicImage(image);

  return (
    <div className="w-full h-full">
      <img
        className="w-full h-full"
        src={imageSrc ? imageSrc : placeholder}
        alt="post"
      />
    </div>
  );
};

export default Thumbnail;
