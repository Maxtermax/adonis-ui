import { forwardRef, useState } from "react";
import { uniqueId } from "lodash";
import { ADText } from "ADText/ADText";
import { Check } from "@styled-icons/boxicons-regular/Check";
import * as styles from "ADCheckbox/styles";

export const ADCheckbox = forwardRef(function ADCheckbox(
  {
    label = "",
    defaultChecked = false,
    onChecked,
    onUnCheck,
    id = uniqueId("ad-checkbox-"),
    ...rest
  },
  ref,
) {
  const [checked, setChecked] = useState(defaultChecked);
  const handleChange = () => {
    setChecked((prevVal) => !prevVal);
    if (checked) return onChecked?.();
    onUnCheck?.();
  };

  return (
    <styles.Container
      onClick={handleChange}
      className="ad-checkbox"
      ref={ref}
    >
      <styles.Input
        className="ad-checkbox__input"
        type="checkbox"
        value={checked}
        id={id}
        {...rest}
      />
      <styles.Checkbox checked={checked} className="ad-checkbox__checkbox">
        <Check size={40} />
      </styles.Checkbox>
      {label ? <ADText value={label} variant="subtitle" role="label" /> : null}
    </styles.Container>
  );
});
