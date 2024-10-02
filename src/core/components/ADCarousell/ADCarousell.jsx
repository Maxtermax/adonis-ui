import React, { forwardRef, useRef } from "react";
import { useObservableStore, useMutations } from "hermes-io";
import _ from "lodash";
import { KeyboardArrowLeft } from "@styled-icons/material/KeyboardArrowLeft";
import { KeyboardArrowRight } from "@styled-icons/material-outlined/KeyboardArrowRight";
import ADButton from "ADButton";
import ADLoader from "ADLoader";
import { ADCarousellContent } from "./components/ADCarousellContent";
import { actions, reducer } from "./reducer";
import { microCarousellStore } from "./store";
import { nextPage, setLoader } from "./mutations";
import { getLastItem } from "./queries";
import * as styles from "./styles";

const { uniqueId } = _;

const ADCarousellPrev = ({ onClick }) => {
  return (
    <ADButton
      onClick={onClick}
      variant="text"
      className="ad-carousell__arrow __arrow-left"
    >
      <KeyboardArrowLeft />
    </ADButton>
  );
};

const ADCarousellNext = ({ store, id }) => {
  const { state, onEvent } = useMutations({
    initialState: { isLoading: false },
    store,
    id,
  });

  onEvent(actions.LOADING, (isLoading) => ({ isLoading }));

  const handleNext = async () => {
    const { id: lastItemId } = getLastItem(store);
    setLoader({ store, id, value: true });
    await nextPage({ store, id, value: lastItemId });
    setLoader({ store, id, value: false });
  };

  if (state.isLoading) return <ADLoader />;

  return (
    <ADButton
      onClick={handleNext}
      variant="text"
      className="ad-carousell__arrow __arrow-right"
    >
      <KeyboardArrowRight />
    </ADButton>
  );
};

export const ADCarousell = ({ data = [], id = uniqueId("ad-carousell") }) => {
  const wrapperRef = useRef(null);
  const { store } = useObservableStore(
    id,
    {
      data,
      page: 0,
      isLoading: false,
    },
    reducer,
    microCarousellStore,
  );

  const handleScroll = () => {
    const container = wrapperRef.current.querySelector(".ad-carousell");
    const prevButton = wrapperRef.current.querySelector(".__arrow-left");
    const posX = container.scrollLeft;
    if (posX === 0) prevButton.disabled = true;
    if (posX > 0) prevButton.disabled = false;
  };

  const handlePrev = () => {
    const container = wrapperRef.current;
    const items = container.querySelectorAll(".ad-media");
    let width = 0;
    let focusTab = null;
    for (const item of items) {
      width += item.clientWidth + 49;
      console.log({ tab: item, width, scrollLeft: container.scrollLeft });
      if (width >= container.scrollLeft) {
        focusTab = item;
        break;
      }
    }
    focusTab?.scrollIntoView?.({ block: "center", behavior: "smooth" });
  };

  return (
    <styles.Wrapper ref={wrapperRef}>
      <ADCarousellPrev onClick={handlePrev} />
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
