import { useEffect, useRef } from "react";
import useMediaQuery from "@/core/hooks/useMediaQuery";

export const useIntersection = (props = {}) => {
  const { containerRef, onIntersection } = props;
  const observersRef = useRef([]);
  const isMobile = useMediaQuery(
    (theme) => `(max-width: ${theme.breakpoints.sm})`,
  );

  const addIntersectionObserverToNode = (node) => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const { scrollLeft, targetLeft } = containerRef.current;
            const isSliding =
              targetLeft !== undefined && scrollLeft !== targetLeft;
            onIntersection?.(isSliding, entry);
            break;
          }
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    observersRef.current.push(observer);
  };

  const observeIntersection = () => {
    const container = containerRef.current;
    if (!container) return;
    const pictures = container.querySelectorAll(props.itemsSelector);
    for (const picture of pictures) {
      addIntersectionObserverToNode(picture);
    }
  };

  useEffect(() => {
    const observers = observersRef.current;
    if (isMobile) observeIntersection();
    return () => {
      for (const observer of observers) observer.disconnect();
    };
  }, [props]);
};
