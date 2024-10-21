import React, { forwardRef } from "react";
import * as styles from "./styles";
import { TEXT_VARIANTS } from "constants";

const { FANCY, HEADING, TITLE, TEXT, SUBTITLE, LABEL } = TEXT_VARIANTS;

export const ADText = forwardRef(function ADText(
  { className = "", variant = TEXT, value, ...rest },
  ref,
) {
  if (variant === HEADING)
    return (
      <styles.Heading
        ref={ref}
        className={`ad-text ad-text-heading ${className}`}
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
        className={`ad-text ad-text-body ${className}`}
        variant={variant}
        {...rest}
      >
        {value}
      </styles.Text>
    );
  if (variant === FANCY)
    return (
      <styles.Fancy
        ref={ref}
        className={`ad-text ad-text-fancy ${className}`}
        variant={variant}
        {...rest}
      >
        {value}
      </styles.Fancy>
    );

  if (variant === LABEL)
    return (
      <styles.Label
        ref={ref}
        className={`ad-text ad-text-body ${className}`}
        variant={variant}
        {...rest}
      >
        {value}
      </styles.Label>
    );
  if (variant === TITLE)
    return (
      <styles.Title
        ref={ref}
        className={`ad-text ad-text-title ${className}`}
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
        className={`ad-text ad-text-subtitle ${className}`}
        variant={variant}
        {...rest}
      >
        {value}
      </styles.SubTitle>
    );
  return null;
});
