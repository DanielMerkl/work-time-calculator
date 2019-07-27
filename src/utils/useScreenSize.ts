import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsLargeDevice(window.innerWidth > 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width, isLargeDevice };
};
