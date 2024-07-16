import { useRef } from "react";

export const useCountDown = (timeout) => {
  const timeoutIdRef = useRef(null);
  const startCountDown = (callback) =>
    (timeoutIdRef.current = setTimeout(callback, timeout));
  const stopCountDown = () => clearInterval(timeoutIdRef.current);

  return { startCountDown, stopCountDown };
};
