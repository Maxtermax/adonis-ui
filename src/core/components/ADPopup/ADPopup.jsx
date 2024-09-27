import React, { forwardRef } from "react";
import uniqueId from "lodash/uniqueId";
import { useMutations } from "hermes-io";
import { Header } from "ADPopup/components/Header";
import { overlayMicroStore } from "ADOverlay/store";
import { actions } from "ADOverlay/reducer";
import ADOverlay from "ADOverlay";
import * as styles from "ADPopup/styles";

export const ADPopup = forwardRef(function ADPopup(
  {
    children = null,
    disableClose = false,
    title = "",
    isOpen = false,
    reRenderOnClose = true,
    id = uniqueId("ad-pop-up-"),
    className = "",
    ...rest
  },
  ref,
) {
  const { state, onEvent } = useMutations({
    initialState: { key: uniqueId() },
    store: overlayMicroStore,
    id
  });

  onEvent(actions.SET_DISPLAY, (isOpen, _resolver, setNoUpdate) => {
    setNoUpdate(!reRenderOnClose);
    if (!isOpen && reRenderOnClose) return { key: uniqueId() };
  });

  return (
    <ADOverlay isOpen={isOpen} id={id}>
      <styles.Container
        key={state.key}
        ref={ref}
        className={`ad-popup ${className}`}
        {...rest}
      >
        <Header title={title} disableClose={disableClose} storeId={id} />
        {children}
      </styles.Container>
    </ADOverlay>
  );
});
