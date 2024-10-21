import React from "react";
import ADGrid, { ADGridCol } from "ADGrid";
import * as styles from "./styles";

export const ADLayoutCategories = ({
  trends = [],
  offerts = [],
  exclusives = [],
  sets = [],
  collections = [],
}) => {
  return (
    <styles.Container className="ad-layout-categories">
      <ADGrid
        fullWidth
        cols={"repeat(auto-fit, minmax(300px, 1fr))"}
        lg={{
          gap: "40px",
        }}
      >
        <ADGridCol className="ad-grid-col">

        </ADGridCol>
      </ADGrid>
    </styles.Container>
  );
};
