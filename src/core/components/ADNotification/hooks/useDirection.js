import { useEffect } from "react";

export const useDirection = (containerRef, direction) => {
  useEffect(() => {
    const $node = containerRef.current;
    const { width } = $node.getBoundingClientRect();
    if (["top", "bottom"].includes(direction)) {
      $node.style.left = `calc(50% - ${width / 2}px)`;
    }
    if (direction === "left") $node.style.left = "0px";
    if (direction === "right") $node.style.right = "-100%";
    if (direction === "top") $node.style.top = "-100%";
    if (direction === "bottom") $node.style.bottom = "0px";
  }, [direction]);
};
