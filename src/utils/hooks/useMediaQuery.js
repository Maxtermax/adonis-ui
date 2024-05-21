import { useTheme } from "@emotion/react";
import { useState, useEffect } from "react";

export const useMediaQuery = (breakpoints) => {
  const theme = useTheme();
  const query = breakpoints?.(theme) ?? "";
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [query]);

  return matches;
};
