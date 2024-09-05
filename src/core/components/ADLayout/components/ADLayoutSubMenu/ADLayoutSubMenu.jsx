import React, { useRef } from "react";
import { useMutations } from "hermes-io";
import ADPanel from "ADPanel";
import { FOCUS_OPTION, BLUR_OPTION } from "constants";
import { layoutMicroStore, layoutHeaderStore } from "ADLayout/store/layout";
import * as styles from "./styles";

export const ADLayoutSubMenu = () => {
  const subMenuRef = useRef(null);
  const subMenuContainerRef = useRef(null);
  const { state, onEvent } = useMutations({
    initialState: { isOpen: false, focus: "" },
    store: layoutMicroStore,
    id: layoutHeaderStore,
  });

  onEvent(FOCUS_OPTION, (value = {}) => {
    subMenuRef.current.classList.remove("hide");
    subMenuContainerRef.current.classList.remove("hide");
    return {
      isOpen: true,
      focus: value.focus ?? "",
    };
  });

  onEvent(BLUR_OPTION, async (value = {}) => {
    if (document.startViewTransition) {
      const transition = document.startViewTransition(() =>
        subMenuContainerRef.current.classList.add("hide"),
      );
      await transition.finished;
      document.startViewTransition(() =>
        subMenuRef.current.classList.add("hide"),
      );
    } else {
      subMenuContainerRef.current.classList.add("hide");
      subMenuRef.current.classList.add("hide");
    }
    return {
      isOpen: false,
      focus: value?.focus ?? "",
    };
  });

  return (
    <styles.SubMenu ref={subMenuRef} className="hide ad-layout-submenu">
      <ADPanel
        ref={subMenuContainerRef}
        className="hide ad-layout-submenu__container"
        variant="flat"
      >
        <styles.Content key={state.focus}>
          Submenu: {state.focus}
        </styles.Content>
      </ADPanel>
    </styles.SubMenu>
  );
};
