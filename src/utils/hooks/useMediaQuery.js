import { useTheme } from "@emotion/react";
import { useState, useEffect } from "react";

let win;
try {
  win = window;
} catch {
  console.log("window not available");
}

export const useMediaQuery = (breakpoints) => {
  const theme = useTheme();
  const query = breakpoints?.(theme) ?? "";
  const [matches, setMatches] = useState(win.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = win.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [query]);

  return matches;
};
