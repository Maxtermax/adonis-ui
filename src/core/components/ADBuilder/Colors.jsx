import { useState } from "react";
import { ADText } from "components/ADText/ADText";
import * as styles from "./styles";
import { SET_THEME } from "constants";

const InputColor = ({ defaultValue, id }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    const result = event.target.value;
    setValue(result);
    store.mutate({ type: SET_THEME, payload: result });
  };

  return (
    <input
      type="color"
      handleChangeid={id}
      name={id}
      value={value}
      onChange={handleChange}
    />
  );
};

const Colors = ({ values }) => {
  const { contrast, ...rest } = values;

  const handleChange = (value) => {
    notify({ colors: { ...theme.colors, [id]: result } });
  };

  return (
    <styles.ColorsContent className="colors-content">
      {Object.keys(rest).map((key, index) => (
        <styles.InputContainer key={key}>
          <InputColor
            defaultValue={rest[key]}
            id={key}
            onChange={handleChange}
          />
          <ADText key={index} variant="label" htmlFor={key} value={key} />
        </styles.InputContainer>
      ))}
    </styles.ColorsContent>
  );
};

export default Colors;
