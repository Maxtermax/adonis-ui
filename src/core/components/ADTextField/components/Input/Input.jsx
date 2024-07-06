import { useMutations } from "hermes-io";
import { microTextField } from "ADTextField/store/field";
import * as styles from "ADTextField/styles";

const SET_VALUE = "SET_VALUE";

export const Input = ({
  id,
  onBlur,
  onFocus,
  placeholder = "",
  defaultValue = "",
  disabled = false,
  ...rest
}) => {
  const { state, onEvent } = useMutations({
    initialState: { value: defaultValue, disabled },
    store: microTextField,
    id,
  });
  onEvent(SET_VALUE, (value, _resolver, _setNoUpdate, state) => ({
    ...state,
    value,
  }));
  const handleChange = (e) => {
    const { value = "" } = e.target;
    const store = microTextField.get(id);
    store.mutate({
      type: SET_VALUE,
      targets: [id],
      payload: {
        value,
      },
    });
  };
  return (
    <styles.Input
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={state.value}
      disabled={disabled}
      {...rest}
    />
  );
};
