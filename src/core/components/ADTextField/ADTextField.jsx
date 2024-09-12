import { useRef, forwardRef } from "react";
import { uniqueId } from "lodash";
import { useObservableStore } from "hermes-io";
import { ADText } from "ADText/ADText";
import { ADPanel } from "ADPanel/ADPanel";
import { Input } from "ADTextField/components/Input/Input";
import { microTextField } from "ADTextField/store/field";
import reducer from "ADTextField/reducer/field";
import * as styles from "ADTextField/styles";

export const ADTextField = forwardRef(function ADTextField(
  {
    helperText = "",
    label = "",
    defaultValue = "",
    placeholder = "",
    disabled = false,
    color = "primary",
    variant = "outlined",
    icon = null,
    id = uniqueId("ad-text-field-"),
    ...rest
  },
  ref,
) {
  const labelRef = useRef(null);
  useObservableStore(
    id,
    { value: defaultValue, disabled },
    reducer,
    microTextField,
  );

  const handleBlur = () =>
    labelRef.current?.classList?.remove?.("label--focus");

  const handleFocus = () => labelRef.current?.classList?.add?.("label--focus");

  return (
    <styles.Container ref={ref} className="ad-text-field" color={color}>
      {label ? (
        <styles.Label
          icon={icon}
          ref={labelRef}
          className="ad-text-field__label"
        >
          {label}
        </styles.Label>
      ) : null}
      <ADPanel
        variant={variant === "outlined" ? "text" : variant}
        className="ad-text-field__input-wrapper"
      >
        {icon ? (
          <styles.Icon className="ad-text-field__icon">{icon}</styles.Icon>
        ) : null}
        <Input
          className="ad-text-field__input"
          id={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          variant={variant}
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
});
