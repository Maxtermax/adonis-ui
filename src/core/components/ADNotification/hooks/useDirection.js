import { useEffect } from "react";

export const useDirection = (containerRef, direction) => {
  useEffect(() => {
    const { width } = containerRef.current.getBoundingClientRect();
    containerRef.current.classList.remove("ad-notification-discard");
    if (["top", "bottom"].includes(direction)) {
      containerRef.current.style.left = `calc(50% - ${width / 2}px)`;
    }
    if (direction === "left") containerRef.current.style.left = "0px";
    if (direction === "right") containerRef.current.style.right = "-100%";
  }, [direction]);
};
