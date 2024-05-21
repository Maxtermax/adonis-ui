import { forwardRef } from "react";
import * as styles from "./style";
import { TEXT_VARIANTS } from "constants";

const { HEADING, TITLE, TEXT, SUBTITLE } = TEXT_VARIANTS;

export const ADText = forwardRef(function ADText(
  { className = "", variant = TEXT, value, ...rest },
  ref
) {
  if (variant === HEADING)
    return (
      <styles.Heading
        ref={ref}
        className={`ad-heading ${className}`}
        variant={variant}
        {...rest}
      >
        {value}
      </styles.Heading>
    );
  if (variant === TEXT)
    return (
      <styles.Text
        ref={ref}
        className={`ad-body ${className}`}
        variant={variant}
        {...rest}
      >
        {value}
      </styles.Text>
    );
  if (variant === TITLE)
    return (
      <styles.Title
        ref={ref}
        className={`ad-title ${className}`}
        variant={variant}
        {...rest}
      >
        {value}
      </styles.Title>
    );
  if (variant === SUBTITLE)
    return (
      <styles.SubTitle
        ref={ref}
        className={`ad-subtitle ${className}`}
        variant={variant}
        {...rest}
      >
        {value}
      </styles.SubTitle>
    );
  return null;
});
