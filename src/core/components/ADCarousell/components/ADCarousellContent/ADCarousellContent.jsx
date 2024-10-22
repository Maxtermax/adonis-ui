import React, { memo, useEffect, useRef } from "react";
import { useMutations } from "hermes-io";
import ADMedia from "ADMedia";
import { actions } from "ADCarousell/reducer";
import { getCarousellData } from "ADCarousell/queries";
import * as styles from "./styles";

const Item = ({ id, ...rest }) => {
  return (
    <styles.Item id={id}>
      <ADMedia {...rest} />
    </styles.Item>
  );
};

const MemoizedItem = memo(Item);

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
    const node = document.getElementById(pivotNode.current?.id);
    node?.scrollIntoView?.({
      inline: "start",
      behavior: "smooth",
    });
  }, [state.data]);

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
    node?.scrollIntoView?.({ inline: "end", behavior: "smooth" });
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
        {state.data.map(({ id, ...rest }) => (
          <MemoizedItem key={id} id={id} {...rest} />
        ))}
      </styles.Content>
    </styles.Container>
  );
};
