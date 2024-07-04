import { Children, cloneElement, forwardRef, useEffect, useRef } from "react";
import { useStoreFactory } from "hermes-io";
import { uniqueId } from "lodash";
import { ADButton } from "ADButton/ADButton";
import { ChevronLeft } from "@styled-icons/evaicons-solid/ChevronLeft";
import { ChevronRight } from "@styled-icons/evaicons-solid/ChevronRight";
import { DIRECTIONS } from "constants";
import tabsCollection from "ADTabs/store/tabs";
import reducer from "ADTabs/reducer/tabs";
import * as styles from "./styles";

export const ADTabs = forwardRef(function ADTabs(
  { className = "", id = uniqueId("ad-tabs-"), arrows, children, ...rest },
  ref,
) {
  const containerRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const { store } = useStoreFactory(
    id,
    { id, focus: "" },
    reducer,
    tabsCollection,
  );
  console.log({ store })

  useEffect(() => {
    if (arrows) {
      const container = containerRef.current.querySelector(".ad-tabs");
      prevButtonRef.current.disabled = container.scrollLeft === 0;
    }
  }, [arrows]);

  const focusFirstVisibleTab = () => {
    const container = containerRef.current.querySelector(".ad-tabs");
    const tabs = container.querySelectorAll("li");
    let width = 0;
    let focusTab = null;
    for (const tab of tabs) {
      width += tab.clientWidth;
      if (width >= container.scrollLeft) {
        focusTab = tab;
        break;
      }
    }
    focusTab?.scrollIntoView?.({ block: "center", behavior: "smooth" });
  };

  const focusLastVisibleTab = () => {
    const container = containerRef.current.querySelector(".ad-tabs");
    const tabs = container.querySelectorAll("li");
    let width = 0;
    let focusTab = null;
    for (const tab of tabs) {
      width += tab.clientWidth;
      if (width > container.clientWidth + container.scrollLeft) {
        focusTab = tab;
        break;
      }
    }
    if (focusTab) {
      focusTab.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }
  };

  const handleScroll = () => {
    const tabs = containerRef.current.querySelector(".ad-tabs");
    const posX = tabs.scrollLeft;
    if (posX === 0) prevButtonRef.current.disabled = true;
    if (posX > 0) prevButtonRef.current.disabled = false;
    if (tabs.scrollWidth - posX === tabs.clientWidth) {
      nextButtonRef.current.disabled = true;
    } else {
      nextButtonRef.current.disabled = false;
    }
  };

  const handleFocus = (event, direction) => {
    const isLeft = direction === DIRECTIONS.LEFT;
    const isRight = direction === DIRECTIONS.RIGHT;
    if (isLeft) focusFirstVisibleTab(event);
    if (isRight) focusLastVisibleTab(event);
  };

  return (
    <styles.Container
      ref={containerRef}
      className={`tabs-container ${className}`}
      {...rest}
    >
      {arrows ? (
        <ADButton
          ref={prevButtonRef}
          onClick={(event) => handleFocus(event, DIRECTIONS.LEFT)}
          variant="text"
        >
          <ChevronLeft />
        </ADButton>
      ) : null}
      <styles.Tabs
        onScroll={handleScroll}
        ref={ref}
        className={`ad-tabs ${className}`}
      >
        {Children.map(children, (child) =>
          cloneElement(child, {
            store,
          }),
        )}
      </styles.Tabs>
      {arrows ? (
        <ADButton
          ref={nextButtonRef}
          onClick={(event) => handleFocus(event, DIRECTIONS.RIGHT)}
          variant="text"
        >
          <ChevronRight />
        </ADButton>
      ) : null}
    </styles.Container>
  );
});
