import React, { useEffect, useRef } from "react";
import { useObservableStore } from "hermes-io";
import _ from "lodash";
import ADButton from "ADButton";
import { KeyboardArrowLeft } from "@styled-icons/material/KeyboardArrowLeft";
import { ADCarousellContent } from "./components/ADCarousellContent";
import { ADCarousellNext } from "./components/ADCarousellNext";
import { reducer } from "./reducer";
import { microCarousellStore } from "./store";
import { useMediaQuery } from "./../../../utils/hooks/useMediaQuery";
import {
  setHasReachedLastItem,
  updateUINextPage,
  setIsMobile,
} from "./mutations";
import { getHasReachedLastItem, getIsMobile, getIsLoading } from "./queries";
import * as styles from "./styles";

const { uniqueId } = _;
const OFFSET = 50;

const getPreviuosNodeToFocus = (nodes, scrollLeft) => {
  let width = 0;
  let result = null;
  for (const node of nodes) {
    width += node.clientWidth + OFFSET;
    if (width >= scrollLeft) {
      result = node;
      break;
    }
  }
  return result;
};

export const ADCarousell = ({ data = [], id = uniqueId("ad-carousell") }) => {
  const wrapperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const match = useMediaQuery(
    (theme) => `(max-width: ${theme.breakpoints.sm})`,
  );
  const { store } = useObservableStore(
    id,
    {
      data,
      page: 0,
      isMobile: false,
      hasReachedLastItem: true,
      isLoading: false,
    },
    reducer,
    microCarousellStore,
  );

  useEffect(() => {
    prevButtonRef.current.disabled = true;
  }, []);

  useEffect(() => {
    setIsMobile({ store, id, value: match });
  }, [match]);

  const handleScroll = (e) => {
    const container = e.target;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const x = scrollWidth - scrollLeft;
    const hasReachedLastItem = x >= clientWidth - OFFSET && x <= clientWidth;
    const isDisabled = scrollLeft === 0;
    prevButtonRef.current.disabled = isDisabled;
    if (getHasReachedLastItem(store) === hasReachedLastItem) return;
    // only update if it's different
    setHasReachedLastItem({ store, id, value: hasReachedLastItem });
    if (getIsMobile(store) && !getIsLoading(store) && hasReachedLastItem) {
      updateUINextPage({ store, id });
    }
  };

  const handlePrev = () => {
    const container = wrapperRef.current.querySelector(".ad-carousell");
    const items = container.querySelectorAll(".ad-media");
    let node = getPreviuosNodeToFocus(items, container.scrollLeft);
    node?.scrollIntoView?.({ block: "center", behavior: "smooth" });
  };

  return (
    <styles.Wrapper ref={wrapperRef}>
      <ADButton
        onClick={handlePrev}
        variant="text"
        className="ad-carousell__arrow __arrow-left"
        id={`ad-carousell_arrow-${id}`}
        ref={prevButtonRef}
      >
        <KeyboardArrowLeft />
      </ADButton>
      <ADCarousellContent
        onScroll={handleScroll}
        store={store}
        id={id}
        data={data}
      />
      <ADCarousellNext store={store} id={id} />
    </styles.Wrapper>
  );
};
