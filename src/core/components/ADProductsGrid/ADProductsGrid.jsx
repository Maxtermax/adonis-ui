import React from "react";
import ADGrid from "ADGrid";
import ADMedia from "ADMedia";

export const ADProductsGrid = ({ data = [] }) => {
  return (
    <ADGrid
      fullWidth
      cols={"repeat(auto-fit, minmax(300px, 1fr))"}
      lg={{
        gap: "40px",
      }}
    >
      {data.map(({ id = "", ...rest }) => (
        <ADMedia {...rest} key={id} />
      ))}
    </ADGrid>
  );
};
