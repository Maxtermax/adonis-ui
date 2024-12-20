import React, { useRef } from "react";
import uniqueId from "lodash/uniqueId";
import { createPortal } from "react-dom";
import { useObservableStore, useMutations } from "hermes-io";
import { useAnimationVisibility } from "ADOverlay/hooks/useAnimationVisibility";
import { overlayMicroStore } from "ADOverlay/store";
import { actions, reducer } from "ADOverlay/reducer";
import * as styles from "ADOverlay/styles";

export const ADOverlay = ({
  children = null,
  isOpen = false,
  id = uniqueId("ad-overlay-"),
  className = "",
}) => {
  const containerRef = useRef(null);
  const { animateVisibility } = useAnimationVisibility(containerRef);
  useObservableStore(id, { isOpen }, reducer, overlayMicroStore, 'overlay');
  const { state, onEvent } = useMutations({
    name: 'overlay',
    initialState: { isOpen },
    store: overlayMicroStore,
    id,
  });

  onEvent(actions.SET_DISPLAY, (isOpen) => {
    animateVisibility(isOpen);
    return { isOpen };
  });

  const content = (
    <styles.Container
      defaultOpen={isOpen}
      isOpen={state.isOpen}
      ref={containerRef}
      className={`ad-overlay ${className}`}
    >
      {children}
    </styles.Container>
  );
  if (typeof document !== "undefined") {
    return createPortal(content, document.body);
  }
  return content;
};
