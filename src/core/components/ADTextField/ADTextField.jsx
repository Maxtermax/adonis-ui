import { uniqueId } from "lodash";
import { useStoreFactory } from "hermes-io";
import { ADText } from "ADText/ADText";
import { ADPanel } from "ADPanel/ADPanel";
import { Input } from "ADTextField/components/Input/Input";
import { microTextField } from "ADTextField/store/field";
import reducer from "ADTextField/reducer/field";
import * as styles from "ADTextField/styles";
import { useRef } from "react";

export const ADTextField = ({
  helperText = "",
  label = "",
  defaultValue = "",
  placeholder = "",
  disabled = false,
  colorVariant = "primary",
  icon = null,
  id = uniqueId("ad-text-field-"),
  ...rest
}) => {
  const labelRef = useRef(null);
  useStoreFactory(
    id,
    { value: defaultValue, disabled },
    reducer,
    microTextField,
  );

  const handleBlur = () => labelRef.current.classList.remove("label--focus");

  const handleFocus = () => labelRef.current.classList.add("label--focus");

  return (
    <styles.Container className="ad-text-field" colorVariant={colorVariant}>
      {label ? (
        <styles.Label
          icon={icon}
          ref={labelRef}
          className="ad-text-field__label"
        >
          {label}
        </styles.Label>
      ) : null}
      <ADPanel className="ad-text-field__input-wrapper">
        {icon ? (
          <styles.Icon className="ad-text-field__icon">{icon}</styles.Icon>
        ) : null}
        <Input
          className="ad-text-field__input"
          id={id}
          colorVariant={colorVariant}
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </ADPanel>
      {helperText ? (
        <ADText
          className="ad-text-field__subtitle"
          variant="subtitle"
          value={helperText}
        />
      ) : null}
    </styles.Container>
  );
};
