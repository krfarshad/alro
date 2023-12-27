import { useEffect, useState } from "react";

const useDeviceSize = () => {
  const [size, setSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return { size };
};

export default useDeviceSize;
