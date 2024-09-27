import { useRef, useState, forwardRef } from "react";
import uniqueId from "lodash/uniqueId";
import { ADText } from "ADText/ADText";
import * as styles from "./styles";

const Radio = ({ onChange, id }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () =>
    setIsChecked((prevVal) => !prevVal) && onChange?.();

  return <styles.Radio id={id} isChecked={isChecked} onClick={handleToggle} />;
};

export const ADRadio = forwardRef(function ADRadio(
  { label, onChecked, onUnCheck, id = uniqueId("ad-radio-"), ...rest },
  ref,
) {
  const inputRef = useRef(null);
  const handleChange = (e) => {
    const { target } = e;
    target.checked = !target.checked;
    if (target.checked) return onChecked?.();
    onUnCheck?.();
  };
  return (
    <styles.Container ref={ref} className="ad-radio">
      <styles.Input className="ad-radio__input" ref={inputRef} type="radio" {...rest} />
      <Radio onChange={handleChange} id={id} />

      {label ? (
        <ADText
          value={label}
          className="ad-radio__label"
          variant="subtitle"
          htmlFor={id}
          role="label"
        />
      ) : null}
    </styles.Container>
  );
});
