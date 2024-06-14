import { useRef } from "react";
import { useMutations } from "hermes-io";
import { uniqueId } from "lodash";
import { FOCUS_TAB } from "constants";
import tabsCollection from 'ADTabs/store/tabs';
import * as styles from "ADTabs/styles";

export const ADTab = ({
  children,
  isSelected,
  id = uniqueId("ad-tab-"),
  onSelect,
  store,
  ...rest
}) => {
  const tabRef = useRef(null);
  const { state } = useMutations({
    initialState: { isSelected },
    onChange: (value) => {
      const isSelected = value === id;
      if (isSelected) {
        onSelect?.(id);
        tabRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
      }
      return { isSelected };
    },
    events: [FOCUS_TAB],
    store: tabsCollection,
    id: store.id,
  });

  const handleClickTab = () => {
    store.mutate({
      type: FOCUS_TAB,
      targets: [store.id],
      payload: { value: id },
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
