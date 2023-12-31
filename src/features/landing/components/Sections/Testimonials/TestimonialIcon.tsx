import { loadDynamicImage } from "@/utils/loadDynamicImage";
import { useEffect, useState } from "react";
import placeholder from "@/assets/images/placeholder.png";

type Props = {
  avatar: string;
};
const TestimonialIcon = (props: Props) => {
  const { avatar } = props;
  const [src, setSrc] = useState<string>("");
  useEffect(() => {
    const loadImage = async () => {
      try {
        const res = await loadDynamicImage(`/src/assets/images/${avatar}`);
        setSrc(res);
      } catch (err) {
        throw new Error("Error loading dynamic image:");
      }
    };

    if (!src) {
      loadImage();
    }
  }, [src, avatar]);

  return (
    <div className="text-center mx-auto mb-4 flex items-center justify-center bg-gray-200 w-[90px] h-[90px] rounded-full overflow-hidden">
      <img
        className="w-16 h-16 rounded-full"
        src={src ? src : placeholder}
        alt="icon"
      />
    </div>
  );
};

export default TestimonialIcon;
