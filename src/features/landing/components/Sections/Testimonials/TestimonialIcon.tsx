import placeholder from "@/assets/images/placeholder.png";
import { useDynamicImage } from "@/hooks/useDynamicImage";

type Props = {
  avatar: string;
};
const TestimonialIcon = (props: Props) => {
  const { avatar } = props;

  const [imageSrc] = useDynamicImage(avatar);

  return (
    <div className="text-center mx-auto mb-4 flex items-center justify-center bg-gray-200 w-[90px] h-[90px] rounded-full overflow-hidden">
      <img
        className="w-16 h-16 rounded-full"
        src={imageSrc ? imageSrc : placeholder}
        alt="icon"
      />
    </div>
  );
};

export default TestimonialIcon;
