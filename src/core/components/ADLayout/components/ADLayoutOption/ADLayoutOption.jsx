import React from "react";
import { useMutations } from "hermes-io";
import ADButton from "ADButton";
import ADText from "ADText";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store";
import { actions } from "ADLayout/reducer";
import * as mutations from "ADLayout/mutations";
import * as styles from "./styles";
// import { getFocus } from "../../queries";

export const ADLayoutOption = ({ data = [] }) => {
  const { state, onEvent } = useMutations({
    noUpdate: false,
    store: layoutMicroStore,
    initialState: { focus: "" },
    id: LAYOUT_HEADER_STORE,
  });

  const handleFocus = (value, _, setNoUpdate, currentState) => {
    const focus = value?.focus ?? "";
    const hasNotMatch = focus !== currentState.focus;
    console.log({ hasNotMatch, focus, currentState });
    setNoUpdate(hasNotMatch);
    return { focus };
  };

  /*
  const handleHeaderBlur = (value, __, setNoUpdate) => {
    const hasNotMatch = value?.focus !== props.id;
    setNoUpdate(hasNotMatch);
    return { focus: "" };
  };
  */

  onEvent(actions.FOCUS_OPTION, handleFocus);
  // onEvent(actions.BLUR_OPTION, handleHeaderBlur);

  const handleEnter = (focus = "") => {
    setTimeout(() => {
      const store = layoutMicroStore.get(LAYOUT_HEADER_STORE);
      mutations.focusOption(store, { focus }, [LAYOUT_HEADER_STORE]);
    }, 300);
  };

  return data.map(({ id = "", name = "" }) => (
    <styles.Item key={id} isSelected={state.focus === id}>
      <ADButton onMouseEnter={() => handleEnter(id)} variant="text">
        <ADText value={name} variant="subtitle" />
      </ADButton>
    </styles.Item>
  ));
};
