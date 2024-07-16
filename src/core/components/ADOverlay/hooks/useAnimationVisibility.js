import { useTheme } from "@emotion/react";

export const useAnimationVisibility = (containerRef) => {
  const theme = useTheme();
  const TIMEOUT = theme.timing.fast.replace(/[a-z]/, "") * 1000;
  const animateVisibility = (isOpen) => {
    const container = containerRef.current;
    setTimeout(() => {
      container.style.display = isOpen ? "flex" : "none";
      container.style.visibility = isOpen ? "visible" : "hidden";
    }, isOpen ? 0 : TIMEOUT);
  };

  return { animateVisibility };
};
