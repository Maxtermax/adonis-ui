import React, { useRef } from "react";
import { useMutations } from "hermes-io";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store";
import { actions } from "ADLayout/reducer";
import * as styles from "./styles";

export const ADLayoutBody = ({ children = null }) => {
  const containerRef = useRef(null);
  const { onEvent } = useMutations({
    noUpdate: true,
    store: layoutMicroStore,
    id: LAYOUT_HEADER_STORE,
  });
  const blurBackground = () => {
    containerRef.current.style.filter = "blur(20px)";
    containerRef.current.style.pointerEvents = "none";
  };

  onEvent(actions.FOCUS_OPTION, blurBackground);
  onEvent(actions.BLUR_LAYOUT_BODY, blurBackground);

  onEvent(actions.BLUR_OPTION, () => {
    setTimeout(() => {
      containerRef.current.style.filter = "blur(0px) grayscale(0)";
      containerRef.current.style.pointerEvents = "auto";
    }, 350);
  });

  return (
    <styles.Container className="ad-layout-body" ref={containerRef}>
      {children}
    </styles.Container>
  );
};
