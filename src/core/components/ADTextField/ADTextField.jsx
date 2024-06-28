import { Observer, Context, Store, useMutations, useStore } from "hermes-io";
import { ADText } from "ADText/ADText";
import { microTextField } from "ADTextField/store/field";
import reducer from "ADTextField/reducer/field";
import * as styles from "ADTextField/styles";
import { uniqueId } from "lodash";

const SET_VALUE = "SET_VALUE";

const Input = ({ id, defaultValue = "", disabled = false }) => {
  const { state } = useMutations({
    initialState: { value: defaultValue, disabled },
    events: [SET_VALUE],
    onChange: (value, _resolver, _setNoUpdate, state) => ({
      ...state,
      value,
    }),
    store: microTextField,
    id,
  });
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
  console.log({ state });
  return (
    <styles.Input
      onChange={handleChange}
      value={state.value}
      disabled={disabled}
    />
  );
};

export const ADTextField = ({
  helperText = "",
  label = "",
  defaultValue = "",
  disabled = false,
  error = false,
  icon = null,
  id = uniqueId(),
}) => {
  useStore({
    microStore: microTextField,
    store: new Store({
      id,
      context: new Context("ADTextField"),
      observer: new Observer(),
    }),
    reducer,
    data: { value: defaultValue, disabled },
  });
  return (
    <styles.Container error={error}>
      {label ? <styles.Label></styles.Label> : null}
      {icon ? <styles.Icon>{icon}</styles.Icon> : null}
      <Input id={id} defaultValue={defaultValue} disabled={disabled} />

      {helperText ? <ADText variant="subtitle" value={helperText} /> : null}
    </styles.Container>
  );
};
