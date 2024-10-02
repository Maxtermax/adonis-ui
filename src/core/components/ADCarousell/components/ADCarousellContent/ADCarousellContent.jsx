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

  onEvent(actions.NEW_PAGE, (value) => {
    const data = getCarousellData(store);
    pivotNode.current = value.at(-1);
    return { data };
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
