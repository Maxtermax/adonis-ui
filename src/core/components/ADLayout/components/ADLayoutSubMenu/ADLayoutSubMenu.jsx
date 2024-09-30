import React, { useRef } from "react";
import { useMutations } from "hermes-io";
import ADPanel from "ADPanel";
import ADFlex from "ADFlex";
import ADText from "ADText";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store";
import { actions } from "ADLayout/reducer";
import { ArrowRight } from "@styled-icons/bootstrap";
import * as styles from "./styles";

const SubList = ({ data = {}, focus = "" }) => {
  return (
    <styles.Nav>
      {data[focus].map(({ name = "", items = [] }, index) => (
        <styles.UnOrderList key={focus + index}>
          <ADText className="ad-text-title" value={name} variant="title" />
          {items.map((item) => (
            <styles.Item key={item.ix} delay={item.ix}>
              <a href={item.link}>
                <ADFlex gap={4}>
                  <ADText
                    className="ad-text-item"
                    value={item.name}
                    variant="subtitle"
                  />
                  <ArrowRight color="white" size={25} />
                </ADFlex>
                <styles.BottomLine className="ad-bottom-line" />
              </a>
            </styles.Item>
          ))}
        </styles.UnOrderList>
      ))}
    </styles.Nav>
  );
};

export const ADLayoutSubMenu = ({ sublist = [] }) => {
  const subMenuRef = useRef(null);
  const subMenuContainerRef = useRef(null);
  const { state, onEvent } = useMutations({
    initialState: { isOpen: false, focus: "" },
    store: layoutMicroStore,
    id: LAYOUT_HEADER_STORE,
  });

  onEvent(actions.FOCUS_OPTION, (value = {}) => {
    subMenuRef.current.classList.remove("hide");
    subMenuContainerRef.current.classList.remove("hide");
    return {
      isOpen: true,
      focus: value.focus ?? "",
    };
  });

  onEvent(actions.BLUR_OPTION, async (value = {}, resolver) => {
    if (typeof document !== "undefined" && document.startViewTransition) {
      const transition = document.startViewTransition(() =>
        subMenuContainerRef.current.classList.add("hide"),
      );
      await transition.finished;
      const closeSubMenuTransition = document.startViewTransition(() =>
        subMenuRef.current.classList.add("hide"),
      );
      await closeSubMenuTransition.finished;
      resolver();
    } else {
      subMenuContainerRef.current.classList.add("hide");
      subMenuRef.current.classList.add("hide");
      resolver();
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
          {state.focus ? <SubList data={sublist} focus={state.focus} /> : null}
        </styles.Content>
      </ADPanel>
    </styles.SubMenu>
  );
};
