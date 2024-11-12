import React, { useRef } from "react";
import { useMutations, useObservableStore } from "hermes-io";
import { ADPanel } from "ADPanel/ADPanel";
import { drawerMicroStore } from "ADDrawer/store";
import { setOpen } from "ADDrawer/mutations";
import { getOpen } from "ADDrawer/queries";
import { actions, reducer } from "ADDrawer/reducer";
import * as styles from "./styles";

export const ADDrawer = ({
  content = null,
  id = 12,
  variant = "left",
  className = "",
  fullWidth = false,
  width = "300px",
}) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  useObservableStore(id, { isOpen: false }, reducer, drawerMicroStore);

  const openDrawer = () => {
    const overlay = overlayRef?.current;
    containerRef?.current?.classList?.remove?.("ad-drawer__container--close");
    containerRef?.current?.classList?.add?.("ad-drawer__container--open");
    overlay?.classList.remove?.("disappear");
    overlay?.classList.add?.("appear");
  };

  const closeDrawer = () => {
    const overlay = overlayRef?.current;
    containerRef?.current?.classList?.remove?.("ad-drawer__container--open");
    containerRef?.current?.classList?.add?.("ad-drawer__container--close");
    overlay?.classList.remove?.("appear");
    overlay?.classList.add?.("disappear");
  };

  const { onEvent } = useMutations({
    noUpdate: true,
    store: drawerMicroStore,
    id,
  });

  onEvent(actions.SET_DRAWER_OPEN, () => {
    const store = drawerMicroStore.get(id);
    const isOpen = getOpen(store);
    if (isOpen) return openDrawer();
    closeDrawer();
  });

  const handleClickOverlay = () =>
    setOpen({ store: drawerMicroStore.get(id), value: false, id });

  return (
    <styles.Wrapper
      width={width}
      variant={variant}
      className={`ad-drawer ${className}`}
    >
      <styles.Overlay
        className={`ad-drawer__overlay disappear`}
        onClick={handleClickOverlay}
        ref={overlayRef}
      />
      <styles.Container
        ref={containerRef}
        fullWidth={fullWidth}
        width={width}
        className={"ad-drawer__container ad-drawer__container--close"}
      >
        <ADPanel className="ad-drawer__panel" variant="flat">
          <styles.Content className="ad-drawer__content">
            {content}
          </styles.Content>
        </ADPanel>
      </styles.Container>
    </styles.Wrapper>
  );
};
