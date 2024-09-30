import React from "react";
import { useMutations } from "hermes-io";
import ADButton from "ADButton";
import ADText from "ADText";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store";
import { actions } from "ADLayout/reducer";
import * as mutations from "ADLayout/mutations";
import * as styles from "./styles";

export const ADLayoutOption = ({ data = [] }) => {
  const { state, onEvent } = useMutations({
    noUpdate: false,
    store: layoutMicroStore,
    initialState: { focus: "" },
    id: LAYOUT_HEADER_STORE,
  });

  const handleFocus = (value) => {
    const focus = value?.focus ?? "";
    return { focus };
  };

  const handleHeaderBlur = () => ({ focus: "" });

  onEvent(actions.FOCUS_OPTION, handleFocus);
  onEvent(actions.BLUR_OPTION, handleHeaderBlur);

  const handleEnter = (focus = "") => {
    const store = layoutMicroStore.get(LAYOUT_HEADER_STORE);
    mutations.focusOption(store, { focus }, [LAYOUT_HEADER_STORE]);
  };

  return data.map(({ id = "", name = "" }) => (
    <styles.Item key={id} isSelected={state.focus === id}>
      <ADButton onMouseEnter={() => handleEnter(id)} variant="text">
        <ADText value={name} variant="subtitle" />
      </ADButton>
    </styles.Item>
  ));
};
