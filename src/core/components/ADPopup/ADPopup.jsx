import { forwardRef } from "react";
import { overlayMicroStore } from "ADOverlay/store/overlay";
import { events } from "ADOverlay/reducer/overlay";
import { ADOverlay } from "ADOverlay/ADOverlay";
import { Header } from "ADPopup/components/Header";
import { uniqueId } from "lodash";
import * as styles from "ADPopup/styles";
import { useMutations } from "hermes-io";

export const ADPopup = forwardRef(function ADPopup(
  {
    children = null,
    disableClose = false,
    title = "",
    isOpen = false,
    reRenderOnClose = true,
    id = uniqueId("ad-pop-up-"),
    className = "",
  },
  ref,
) {
  const { state, onEvent } = useMutations({
    initialState: { key: uniqueId() },
    store: overlayMicroStore,
    id
  });

  onEvent(events.SET_DISPLAY, (isOpen, _resolver, setNoUpdate) => {
    setNoUpdate(!reRenderOnClose);
    if (!isOpen && reRenderOnClose) return { key: uniqueId() };
  });

  return (
    <ADOverlay isOpen={isOpen} id={id}>
      <styles.Container
        key={state.key}
        ref={ref}
        className={`ad-popup ${className}`}
      >
        <Header title={title} disableClose={disableClose} storeId={id} />
        {children}
      </styles.Container>
    </ADOverlay>
  );
});
