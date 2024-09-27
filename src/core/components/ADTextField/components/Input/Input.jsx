import React, { useRef } from "react";
import { useMutations } from "hermes-io";
import { microTextFieldStore } from "ADTextField/store";
import { actions } from "ADTextField/reducer";
import * as mutations from "ADTextField/mutations";
import * as styles from "ADTextField/styles";

export const Input = ({
  id,
  onBlur,
  onFocus,
  onChange,
  debounce = 0,
  placeholder = "",
  defaultValue = "",
  disabled = false,
  ...rest
}) => {
  const intervalIdRef = useRef(null);
  const { state, onEvent } = useMutations({
    initialState: { value: defaultValue, disabled },
    store: microTextFieldStore,
    id,
  });

  onEvent(actions.SET_VALUE, (value, _, __, currentState) => {
    return {
      ...currentState,
      value,
    };
  });

  onEvent(actions.DISABLED, (value, _, __, currentState) => ({
    ...currentState,
    disabled: value,
  }));


  onEvent('HOLA', (value, _, __, currentState) => ({
    ...currentState,
  }));

  const handleChange = (e) => {
    const { value = "" } = e.target;
    clearInterval(intervalIdRef.current);
    mutations.updateValue(id, value);
    if (debounce) {
      intervalIdRef.current = setTimeout(() => {
        mutations.fireChangeEvent(id, value);
        onChange?.(e);
      }, debounce);
    } else {
      mutations.fireChangeEvent(id, value);
      onChange?.(e);
    }
  };

  return (
    <styles.Input
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      value={state.value}
      disabled={state.disabled}
      {...rest}
    />
  );
};
