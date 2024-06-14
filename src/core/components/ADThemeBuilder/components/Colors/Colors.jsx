import { useState } from "react";
import { ADText } from "components/ADText/ADText";
import store from "ADThemeBuilder/store/builder";
import { SET_THEME_FIELD, COMPONENTS_TARGETS } from "constants";
import * as styles from "./styles";

const Input = ({ defaultValue, id }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    const result = event.target.value;
    const payload = {
      targets: {
        colors: {
          [id]: result,
        },
      },
    };
    setValue(result);
    store.mutate({
      type: SET_THEME_FIELD,
      payload,
      targets: [COMPONENTS_TARGETS.AD_THEME_BUILDER],
    });
  };

  return (
    <styles.Color className="color">
      <styles.PlaceHolder className="placeholder" color={value} htmlFor={id} />
      <input type="color" name={id} value={value} onChange={handleChange} />
    </styles.Color>
  );
};

const Colors = ({ values }) => {
  const { contrast, ...rest } = values;

  return (
    <styles.Content className="colors-content">
      {Object.keys(rest).map((key) => (
        <styles.Container key={key}>
          <Input defaultValue={rest[key]} id={key} />
          <ADText variant="text" value={key} />
        </styles.Container>
      ))}
    </styles.Content>
  );
};

export default Colors;
