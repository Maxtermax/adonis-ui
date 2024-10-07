import React, { useLayoutEffect, useRef } from "react";
import { useMutations } from "hermes-io";
import ADMedia from "ADMedia";
import { actions } from "ADCarousell/reducer";
import { getCarousellData } from "ADCarousell/queries";
import * as styles from "./styles";

export const ADCarousellContent = ({ store, id, data, onScroll }) => {
  const containerRef = useRef(null);
  const pivotNode = useRef(null);
  const { state, onEvent } = useMutations({
    initialState: { data },
    store,
    id,
  });

  useLayoutEffect(() => {
    document.getElementById(pivotNode.current?.id)?.scrollIntoView?.({
      block: "start",
      behavior: "smooth",
    });
  }, [state.data]);

  onEvent(actions.NEW_PAGE, (value, _resolver, setNoUpdate) => {
    const data = getCarousellData(store);
    pivotNode.current = value.at(-1);
    setNoUpdate(false);
    return { data };
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
    node?.scrollIntoView?.({ block: "center", behavior: "smooth" });
    setNoUpdate(true);
  });

  return (
    <styles.Container
      ref={containerRef}
      onScroll={onScroll}
      className="ad-carousell"
    >
      <styles.Content>
        {state.data.map(({ id, ...rest }) => (
          <div key={id} id={id}>
            <ADMedia {...rest} />
          </div>
        ))}
      </styles.Content>
    </styles.Container>
  );
};
