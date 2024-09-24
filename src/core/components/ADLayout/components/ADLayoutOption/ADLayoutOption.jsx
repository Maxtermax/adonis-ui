import { useMutations } from "hermes-io";
import ADButton from "ADButton";
import ADText from "ADText";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store";
import { actions } from "ADLayout/reducer";
import * as mutations from "ADLayout/mutations";
import * as styles from "./styles";

export const ADLayoutOption = (props = {}) => {
  const { state, onEvent } = useMutations({
    initialState: { focus: "" },
    noUpdate: false,
    store: layoutMicroStore,
    id: LAYOUT_HEADER_STORE,
  });

  const handleFocus = (value, _, setNoUpdate) => {
    const hasNotMatch = value?.focus !== props.id;
    setNoUpdate(hasNotMatch);
    return { focus: value?.focus ?? "" };
  };

  const handleBlur = (value, __, setNoUpdate) => {
    const hasNotMatch = value?.focus !== props.id;
    setNoUpdate(hasNotMatch);
    return { focus: "" };
  };

  onEvent(actions.FOCUS_OPTION, handleFocus);
  // onEvent(actions.BLUR_OPTION, handleBlur);

  const isSelected = state.focus === props.id;

  const handleEnter = () => {
    const { id: focus } = props;
    console.trace("focus:" + focus);
    const store = layoutMicroStore.get(LAYOUT_HEADER_STORE);
    mutations.focusOption(store, { focus }, [LAYOUT_HEADER_STORE]);
  };

  return (
    <styles.Item isSelected={isSelected}>
      <ADButton onMouseEnter={handleEnter} variant="text">
        <ADText value={props.name} variant="subtitle" />
      </ADButton>
    </styles.Item>
  );
};
