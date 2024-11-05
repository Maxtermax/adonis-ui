import React, { memo, useEffect, useRef } from "react";
import { useMutations } from "hermes-io";
import ADMedia from "ADMedia";
import { useIntersection } from "ADSlides/components/ADSlideIndicator/hooks/useIntersection";
import { actions } from "ADCarousell/reducer";
import { mediaStore } from "ADMedia/store";
import { setPaused } from "ADMedia/mutations/media";
import { getCarousellData } from "ADCarousell/queries";
import * as styles from "./styles";
import { getIsMobile } from "../../queries";

const Item = ({ id, ...rest }) => {
  return (
    <styles.Item>
      <ADMedia id={id} {...rest} />
    </styles.Item>
  );
};

const MemoizedItem = memo(Item, () => true);

export const ADCarousellContent = ({ store, id, data, onScroll }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const pivotNode = useRef(null);
  const { state, onEvent } = useMutations({
    initialState: { data },
    store,
    id,
  });

  useEffect(() => {
    const container = containerRef.current;
    const node = document.getElementById(`ad-card-id-${pivotNode.current?.id}`);
    if (node) {
      container.scrollTo({ left: node.offsetLeft, behavior: "smooth" });
    }
  }, [state.data]);

  const handleIntersection = (_, entry) => {
    const isMobile = getIsMobile(store);
    if (!isMobile) return;
    const container = containerRef.current;
    const items = container.querySelectorAll(".ad-card");
    for (const item of items) {
      item.classList.add("ad-carousell-item--shrink");
    }
    const { target } = entry;
    target.classList.remove("ad-carousell-item--shrink");
    const id = target.id.replace("ad-card-id-", "");
    setPaused({
      store: mediaStore.get(id),
      targets: [id],
      value: false,
    });
  };

  useIntersection({
    data: state.data,
    itemsSelector: ".ad-card",
    containerRef,
    onIntersection: handleIntersection,
  });

  onEvent(actions.NEW_PAGE, (value, _resolver, setNoUpdate) => {
    const data = getCarousellData(store);
    pivotNode.current = value.at(0);
    setNoUpdate(false);
    return { data };
  });

  onEvent(actions.LOADING, (loading, _resolver, setNoUpdate) => {
    containerRef.current.style = `pointer-events: ${loading ? "none" : "auto"}`;
    setNoUpdate(false);
  });

  onEvent(actions.FOCUS_NEXT_ITEM, (_value, _resolver, setNoUpdate) => {
    const container = containerRef.current;
    const items = container.querySelectorAll(".ad-media");
    let width = 0;
    let node = items[items.length - 1];
    for (const item of items) {
      width += item.clientWidth;
      if (width > container.clientWidth + container.scrollLeft) {
        node = item;
        break;
      }
    }
    container.style.scrollSnapType = "none";
    const left = node.offsetLeft;
    container.scrollTo({ left, behavior: "smooth" });
    setNoUpdate(true);
  });

  return (
    <styles.Container
      ref={containerRef}
      id={id}
      onScroll={onScroll}
      className="ad-carousell"
    >
      <styles.Content ref={contentRef}>
        {state.data.map(({ id, ...rest }, index) => (
          <MemoizedItem
            key={id}
            id={id}
            cardProps={{
              className: index >= 1 ? "ad-carousell-item--shrink" : "",
              id: `ad-card-id-${id}`,
            }}
            {...rest}
          />
        ))}
      </styles.Content>
    </styles.Container>
  );
};
