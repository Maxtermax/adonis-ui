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
    containerRef.current.classList.add("ad-layout-body__container--blur");
  };

  onEvent(actions.FOCUS_OPTION, blurBackground);
  onEvent(actions.BLUR_LAYOUT_BODY, blurBackground);

  onEvent(actions.BLUR_OPTION, () => {
    setTimeout(() => {
      containerRef.current.classList.remove("ad-layout-body__container--blur");
    }, 350);
  });

  return (
    <styles.Container className="ad-layout-body" ref={containerRef}>
      {children}
    </styles.Container>
  );
};
