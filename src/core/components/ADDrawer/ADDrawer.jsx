import { useRef } from "react";
import { useMutations, Context, Observer, Store, useStore } from "hermes-io";
import { uniqueId } from "lodash";
import { ADPanel } from "ADPanel/ADPanel";
import { drawerMicroStore } from "ADDrawer/store/drawer";
import { setOpen } from "ADDrawer/mutations/drawer";
import { getOpen } from "ADDrawer/queries/drawer";
import reducer from "ADDrawer/reducer/drawer";
import { SET_DRAWER_OPEN } from "constants";
import * as styles from "./styles";

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
  useStore({
    microStore: drawerMicroStore,
    store: new Store({
      id,
      context: new Context("Drawer"),
      observer: new Observer(),
    }),
    reducer,
    data: { isOpen: false },
  });

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

  useMutations({
    events: [SET_DRAWER_OPEN],
    noUpdate: true,
    onChange: () => {
      const store = drawerMicroStore.get(id);
      const isOpen = getOpen(store);
      if (isOpen) return openDrawer();
      closeDrawer();
    },
    store: drawerMicroStore,
    id,
  });

  const handleClickOverlay = () => {
    setOpen({ store: drawerMicroStore.get(id), value: false, id });
  };

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
