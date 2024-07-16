import { useRef } from "react";
import { useMutations } from "hermes-io";
import { uniqueId } from "lodash";
import { FOCUS_TAB } from "constants";
import microTabsStore from "ADTabs/store/tabs";
import * as styles from "ADTabs/styles";

export const ADTab = ({
  children,
  isSelected,
  onSelect,
  store,
  ...rest
}) => {
  const idRef = useRef(rest?.id || uniqueId("ad-tab-"));
  const tabRef = useRef(null);
  const { state, onEvent } = useMutations({
    initialState: { isSelected },
    store: microTabsStore,
    id: store.id,
  });

  onEvent(FOCUS_TAB, (value) => {
    const isSelected = value === idRef.current;
    if (isSelected) {
      onSelect?.(idRef.current);
      tabRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    return { isSelected };
  });

  const handleClickTab = () => {
    store.mutate({
      type: FOCUS_TAB,
      targets: [store.id],
      payload: { value: idRef.current },
    });
  };

  return (
    <styles.Tab
      {...rest}
      ref={tabRef}
      className="ad-tab"
      isSelected={state.isSelected}
      onClick={handleClickTab}
    >
      {children}
    </styles.Tab>
  );
};
