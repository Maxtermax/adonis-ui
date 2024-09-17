import React from 'react';
import * as styles from "./styles";

export const ADFlex = ({
  children,
  className = "",
  ...rest
}) => (
  <styles.Flex
    className={`ad-flex ${className}`}
    {...rest}
  >
    {children}
  </styles.Flex>
);

