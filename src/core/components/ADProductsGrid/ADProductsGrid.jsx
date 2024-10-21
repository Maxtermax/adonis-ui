import React from "react";
import ADGrid from "ADGrid";
import { ADProductCard } from "../ADProductCard/ADProductCard";
import * as styles from "./styles";

export const ADProductsGrid = ({ data = [] }) => {
  return (
    <styles.Container>
      <ADGrid
        fullWidth
        cols={"repeat(auto-fit, minmax(300px, 1fr))"}
        lg={{
          gap: "20px",
        }}
        sm={{
          gap: "10px",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          columnGap: "15px"
        }}
      >
        {data.map(({ id = "", ...rest }) => {
          return <ADProductCard key={id} {...rest} />;
        })}
      </ADGrid>
    </styles.Container>
  );
};
