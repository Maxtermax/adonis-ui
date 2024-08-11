import React, { forwardRef } from "react";
import * as styles from "./styles";

export const ADCard = forwardRef(function ADCard(
  {
    children,
    Header = null,
    Content = null,
    Footer = null,
    className = "",
    ...rest
  },
  ref
) {
  return (
    <styles.Card ref={ref} className={`ad-card ${className}`} {...rest}>
      {children || (
        <>
          {Header && (
            <styles.Header className="ad-card-header">
              <Header />
            </styles.Header>
          )}
          {Content && (
            <styles.Content className="ad-card-content">
              <Content />
            </styles.Content>
          )}
          {Footer && (
            <styles.Footer className="ad-card-footer">
              <Footer />
            </styles.Footer>
          )}
        </>
      )}
    </styles.Card>
  );
});
