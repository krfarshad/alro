import { loadDynamicImage } from "@/utils/loadDynamicImage";
import { useEffect, useState } from "react";
import placeholder from "@/assets/images/placeholder.png";
type Props = {
  icon: string;
};
const ServiceIcon = (props: Props) => {
  const { icon } = props;
  const [src, setSrc] = useState<string>("");

  useEffect(() => {
    const loadImage = async () => {
      try {
        const res = await loadDynamicImage(
          `/src/features/landing/assets/${icon}`
        );
        setSrc(res);
      } catch (err) {
        throw new Error("Error loading dynamic image:");
      }
    };

    if (!src) {
      loadImage();
    }
  }, [src, icon]);

  return (
    <div className="text-center">
      <img
        className="mx-auto inline-block mt-4 w-auto h-12"
        src={src ? src : placeholder}
        alt="icon"
      />
    </div>
  );
};

export default ServiceIcon;
