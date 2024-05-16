import * as styles from "./style";

export const ADCard = ({
  children,
  Header = null,
  Content = null,
  Footer = null,
  className = "",
  ...rest
}) => (
  <styles.Card className={`ad-card ${className}`} {...rest}>
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
