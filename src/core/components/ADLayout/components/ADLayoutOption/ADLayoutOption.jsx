import { useMutations } from "hermes-io";
import ADButton from "ADButton";
import ADText from "ADText";
import { FOCUS_OPTION, BLUR_OPTION } from "constants";
import { layoutMicroStore, LAYOUT_HEADER_STORE } from "ADLayout/store/layout";
import * as mutations from "ADLayout/mutations/layout";
import * as styles from "./styles";

export const ADLayoutOption = (props = {}) => {
  const handleFocusChange = (value, _resolver, setNoUpdate, currentState) => {
    const match = value?.focus === props.id || currentState?.focus === props.id;
    setNoUpdate(!match);
    return { focus: value?.focus ?? "" };
  };

  const { state } = useMutations({
    initialState: { focus: "" },
    events: [FOCUS_OPTION, BLUR_OPTION],
    onChange: handleFocusChange,
    store: layoutMicroStore,
    id: LAYOUT_HEADER_STORE,
  });

  const isSelected = state.focus === props.id;

  const handleEnter = (focus = "") => {
    const store = layoutMicroStore.get(LAYOUT_HEADER_STORE);
    mutations.focusOption(store, { focus }, [LAYOUT_HEADER_STORE]);
  };

  return (
    <styles.Item isSelected={isSelected}>
      <ADButton onMouseEnter={() => handleEnter(props.id)} variant="text">
        <ADText value={props.name} variant="subtitle" />
      </ADButton>
    </styles.Item>
  );
};
