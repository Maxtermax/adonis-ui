import { useRef } from "react";
import { createPortal } from "react-dom";
import { useObservableStore, useMutations } from "hermes-io";
import { useAnimationVisibility } from "ADOverlay/hooks/useAnimationVisibility";
import { uniqueId } from "lodash";
import { overlayMicroStore } from "ADOverlay/store/overlay";
import reducer, { events } from "ADOverlay/reducer/overlay";
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

  onEvent(events.SET_DISPLAY, (isOpen) => {
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
