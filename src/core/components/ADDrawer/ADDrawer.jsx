import React, { useRef } from "react";
import { useMutations, useObservableStore } from "hermes-io";
import { uniqueId } from "lodash";
import { ADPanel } from "ADPanel/ADPanel";
import { drawerMicroStore } from "ADDrawer/store/drawer";
import { setOpen } from "ADDrawer/mutations/drawer";
import { getOpen } from "ADDrawer/queries/drawer";
import reducer from "ADDrawer/reducer/drawer";
import { SET_DRAWER_OPEN } from "constants";
import * as styles from "./styles";

/**
 * ADDrawer component handles the rendering of a sliding drawer with customizable options.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} [props.content=null] - The content to be displayed inside the drawer.
 * @param {string} [props.id=uniqueId("ad-drawer-")] - The unique identifier for the drawer.
 * @param {"left"|"right"|"top"|"bottom"} [props.variant="left"] - The variant of the drawer, specifying its position.
 * @param {string} [props.className=""] - Additional class names to apply to the drawer.
 * @param {boolean} [props.fullWidth=false] - Determines if the drawer should occupy the full width of the screen.
 * @param {string} [props.width="300px"] - The width of the drawer when `fullWidth` is false.
 * @returns {JSX.Element} The rendered ADDrawer component.
 */
export const ADDrawer = ({
  content = null,
  id = uniqueId("ad-drawer-"),
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

  onEvent(SET_DRAWER_OPEN, () => {
    const store = drawerMicroStore.get(id);
    const isOpen = getOpen(store);
    if (isOpen) return openDrawer();
    closeDrawer();
  });

  const handleClickOverlay = () =>
    setOpen({ store: drawerMicroStore.get(id), value: false, id });

  return (
    <styles.Wrapper variant={variant} className={`ad-drawer ${className}`}>
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
