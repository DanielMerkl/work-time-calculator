import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth > 600);

  useEffect(() => {
    const handleResize = () => setIsLargeDevice(window.innerWidth > 600);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isLargeDevice };
};
