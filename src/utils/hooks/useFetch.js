import { useState, useRef, useEffect } from "react";
import unpack from "utils/unpack";

export const useFetch = (api) => {
  const [isLoading, setLoading] = useState(false);
  const errorRef = useRef(null);
  const dataRef = useRef(null);
  const shouldReRender = useRef(true);

  const execute = async (request) => {
    setLoading(true);
    const { ok, error, result } = await unpack(request());
    setLoading(false);
    if (ok) dataRef.current = result;
    if (error) errorRef.current = error;
  };

  const call = async (request, options = {}) => {
    if (shouldReRender.current || options.lazy) return await unpack(request());
    execute(request);
  };

  useEffect(() => {
    if (api) execute(api);
  }, []);

  const vars = () => {
    shouldReRender.current = false;
    return {
      error: errorRef.current,
      data: dataRef.current,
      isLoading,
    };
  };

  return {
    vars,
    call,
  };
};
