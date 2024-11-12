import React from "react";
import ADGrid from "ADGrid";
import ADText from "ADText";
import ADFlex from "ADFlex";
import { ADProductStrips } from "../ADProductStrips/ADProductStrips";
// import ADProductStrips from "ADProductStrips";

export const ADRecommendations = ({ data = [] }) => {
  return (
    <ADGrid
      alignItems={"start"}
      gap={6}
      cols={"repeat(2, 1fr)"}
      lg={{
        margin: "0px auto",
        marginTop: "20px",
        cols: 2,
        rows: 1,
      }}
      sm={{
        gap: "10px",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      }}
      width="calc(100% - 20px)"
      height="100%"
    >
      {data.map(({ id = "", name = "", products = [] }) => (
        <ADFlex
          fullWidth
          alignItems="flex-start"
          direction="column"
          gap={4}
          key={id}
        >
          <ADText variant="title" value={name} />
          <ADProductStrips key={id} data={products} />
        </ADFlex>
      ))}
    </ADGrid>
  );
};
