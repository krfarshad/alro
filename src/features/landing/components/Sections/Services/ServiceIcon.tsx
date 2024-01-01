import placeholder from "@/assets/images/placeholder.png";
import { useDynamicImage } from "@/hooks/useDynamicImage";
type Props = {
  icon: string;
};
const ServiceIcon = (props: Props) => {
  const { icon } = props;
  const [imageSrc] = useDynamicImage(icon);
  return (
    <div className="text-center">
      <img
        className="mx-auto inline-block mt-4 w-auto h-12"
        src={imageSrc ? imageSrc : placeholder}
        alt="icon"
      />
    </div>
  );
};

export default ServiceIcon;
