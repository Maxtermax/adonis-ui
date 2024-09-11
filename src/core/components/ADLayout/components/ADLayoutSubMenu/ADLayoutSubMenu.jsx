import React, { useRef } from "react";
import { useMutations } from "hermes-io";
import ADPanel from "ADPanel";
import ADText from "ADText";
import { FOCUS_OPTION, BLUR_OPTION } from "constants";
import { layoutMicroStore, layoutHeaderStore } from "ADLayout/store/layout";
import * as styles from "./styles";

const subListMap = {
  recents: [
    {
      name: "Recientes",
      items: [
        {
          name: "Item 1",
          link: "#",
          ix: 0,
        },
        {
          name: "Item 2",
          link: "#",
          ix: 1,
        },
        {
          name: "Item 3",
          link: "#",
          ix: 2,
        },
      ],
    },
    {
      name: "Recientes 2",
      items: [
        {
          name: "Item 1",
          link: "#",
          ix: 3,
        },
        {
          name: "Item 2",
          link: "#",
          ix: 4,
        },
        {
          name: "Item 3",
          link: "#",
          ix: 5,
        },
      ],
    },
    {
      name: "Recientes 3",
      items: [
        {
          name: "Item 1",
          link: "#",
          ix: 4,
        },
        {
          name: "Item 2",
          link: "#",
          ix: 5,
        },
      ],
    },
  ],
  categories: [
    {
      name: "Recientes",
      items: [
        {
          name: "Item 1",
          link: "#",
          ix: 0,
        },
        {
          name: "Item 2",
          link: "#",
          ix: 1,
        },
        {
          name: "Item 3",
          link: "#",
          ix: 2,
        },
      ],
    },
    {
      name: "Recientes 2",
      items: [
        {
          name: "Item 1",
          link: "#",
          ix: 3,
        },
        {
          name: "Item 2",
          link: "#",
          ix: 4,
        },
        {
          name: "Item 3",
          link: "#",
          ix: 5,
        },
      ],
    },
    {
      name: "Recientes 3",
      items: [
        {
          name: "Item 1",
          link: "#",
          ix: 4,
        },
        {
          name: "Item 2",
          link: "#",
          ix: 5,
        },
      ],
    },
  ],
  offers: [
    {
      name: "Recientes",
      items: [
        {
          name: "Item 1",
          link: "#",
          ix: 0,
        },
        {
          name: "Item 2",
          link: "#",
          ix: 1,
        },
        {
          name: "Item 3",
          link: "#",
          ix: 2,
        },
      ],
    },
    {
      name: "Recientes 2",
      items: [
        {
          name: "Item 1",
          link: "#",
          ix: 3,
        },
        {
          name: "Item 2",
          link: "#",
          ix: 4,
        },
        {
          name: "Item 3",
          link: "#",
          ix: 5,
        },
      ],
    },
    {
      name: "Recientes 3",
      items: [
        {
          name: "Item 1",
          link: "#",
          ix: 4,
        },
        {
          name: "Item 2",
          link: "#",
          ix: 5,
        },
      ],
    },
  ],
};

const SubList = ({ focus = "" }) => {
  return (
    <styles.Nav>
      {subListMap[focus].map(({ name = "", items = [] }) => (
        <styles.UnOrderList key={focus}>
          <ADText className="ad-text-title" value={name} variant="title" />
          {items.map((item) => (
            <styles.Item key={item.ix} delay={item.ix}>
              <a href={item.link}>
                <ADText
                  className="ad-text-item"
                  value={item.name}
                  variant="subtitle"
                />
                <styles.BottomLine className="ad-bottom-line" />
              </a>
            </styles.Item>
          ))}
        </styles.UnOrderList>
      ))}
    </styles.Nav>
  );
};

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

  onEvent(BLUR_OPTION, async (value = {}, resolver) => {
    if (document.startViewTransition) {
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
          {state.focus ? <SubList focus={state.focus} /> : null}
        </styles.Content>
      </ADPanel>
    </styles.SubMenu>
  );
};
