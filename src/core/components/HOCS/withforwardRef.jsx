import React from 'react';

const withforwardRef = (Component) => {
  const Wrapper = React.forwardRef((props, ref) => {
    return <Component {...props} ref={ref} />;
  });

  return Wrapper;
};

export default withforwardRef;
