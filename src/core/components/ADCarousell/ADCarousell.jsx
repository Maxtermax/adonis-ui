import React, { useEffect, useRef } from "react";
import { useObservableStore } from "hermes-io";
import { useMutations } from "hermes-io";
import _ from "lodash";
import { ArrowRight } from "@styled-icons/feather/ArrowRight";
import ADNotifyPopup from "ADNotifyPopup";
import ADButton from "ADButton";
import { overlayMicroStore } from "ADOverlay/store/overlay";
import * as popUpMutations from "ADPopup/mutations";
import { ADCarousellContent } from "./components/ADCarousellContent";
import { ADCarousellNext } from "./components/ADCarousellNext";
import { reducer } from "./reducer";
import { microCarousellStore } from "./store";
import useMediaQuery from "@/core/hooks/useMediaQuery";
import {
  setHasReachedLastItem,
  updateUINextPage,
  setIsMobile,
} from "./mutations";
import { getHasReachedLastItem, getIsMobile, getIsLoading } from "./queries";
import { actions } from "ADMedia/reducer";
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

export const ADCarousell = ({
  data = [],
  showArrows = true,
  id = uniqueId("ad-carousell"),
}) => {
  const notificationId = id + "-notify-popup";
  const productRef = useRef(null);
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
      productId: null,
      hasReachedLastItem: false,
      isLoading: false,
    },
    reducer,
    microCarousellStore,
  );

  const { onEvent } = useMutations({
    noUpdate: true,
    store: microCarousellStore,
    id,
  });

  onEvent(actions.SELECT_SIZE, (value) => {
    const { isNotAvailable, productId } = value;
    if (isNotAvailable) {
      productRef.current = productId;
      const store = overlayMicroStore.get(notificationId);
      popUpMutations.setOpen({ store, id: notificationId, value: true });
    }
  });

  useEffect(() => {
    const container = wrapperRef.current.querySelector(".ad-carousell");
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const x = scrollWidth - scrollLeft;
    const hasReachedLastItem = x >= clientWidth - OFFSET && x <= clientWidth;
    setHasReachedLastItem({ store, id, value: hasReachedLastItem });
  }, []);

  useEffect(() => {
    if (prevButtonRef.current) prevButtonRef.current.disabled = true;
  }, []);

  useEffect(() => {
    setIsMobile({ store, id, value: match });
  }, [match]);

  const handleTouchEnd = (e) => {
    const container = e.target;
    container.style.scrollSnapType = "x mandatory";
  };

  const handleScroll = (e) => {
    const container = e.target;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    const x = scrollWidth - scrollLeft;
    const hasReachedLastItem = x >= clientWidth - OFFSET && x <= clientWidth;
    const isDisabled = scrollLeft === 0;
    const isMobile = getIsMobile(store);
    if (prevButtonRef.current) prevButtonRef.current.disabled = isDisabled;
    if (getHasReachedLastItem(store) === hasReachedLastItem) return;
    // only update if it's different
    setHasReachedLastItem({ store, id, value: hasReachedLastItem });
    if (isMobile && !getIsLoading(store) && hasReachedLastItem) {
      updateUINextPage({ store, id });
    }
  };

  const handlePrev = () => {
    const container = wrapperRef.current.querySelector(".ad-carousell");
    const items = container.querySelectorAll(".ad-media");
    let node = getPreviuosNodeToFocus(items, container.scrollLeft);
    if (!node || !container) return;
    container.scrollTo({ left: node.offsetLeft, behavior: "smooth" });
  };

  return (
    <styles.Wrapper ref={wrapperRef}>
      {showArrows ? (
        <ADButton
          onClick={handlePrev}
          variant="contained"
          className="ad-carousell__arrow __arrow-left"
          id={`ad-carousell_arrow-${id}`}
          ref={prevButtonRef}
        >
          <ArrowRight style={{ transform: "rotate(180deg)" }} />
        </ADButton>
      ) : null}
      <ADCarousellContent
        onScroll={handleScroll}
        onTouchEnd={handleTouchEnd}
        store={store}
        id={id}
        data={data}
      />
      {showArrows ? <ADCarousellNext store={store} id={id} /> : null}
      <ADNotifyPopup product={productRef} id={notificationId} />
    </styles.Wrapper>
  );
};
