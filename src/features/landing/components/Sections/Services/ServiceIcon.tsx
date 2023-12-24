import { useState } from "react";

type Props = {
  icon: string;
};
const ServiceIcon = (props: Props) => {
  const { icon } = props;
  const [src, setSrc] = useState<string>("");
  const LoadImage = async (icon: string) => {
    const response = await import(`../../../../assets/${icon}`);
    setSrc(response?.default);
  };

  if (!src) {
    try {
      LoadImage(icon);
    } catch (err) {
      throw new Error("Error occur for uploading dynamic image");
    }
  }

  return (
    <div className="text-center">
      <img src={src} alt="icon" />
    </div>
  );
};

export default ServiceIcon;
