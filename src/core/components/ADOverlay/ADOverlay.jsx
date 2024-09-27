import { useRef } from "react";
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
  useObservableStore(id, { isOpen }, reducer, overlayMicroStore);
  const { state, onEvent } = useMutations({
    initialState: { isOpen },
    store: overlayMicroStore,
    id,
  });

  onEvent(actions.SET_DISPLAY, (isOpen) => {
    animateVisibility(isOpen);
    return { isOpen };
  });

  return createPortal(
    <styles.Container
      defaultOpen={isOpen}
      isOpen={state.isOpen}
      ref={containerRef}
      className={`ad-overlay ${className}`}
    >
      {children}
    </styles.Container>,
    document.body,
  );
};
