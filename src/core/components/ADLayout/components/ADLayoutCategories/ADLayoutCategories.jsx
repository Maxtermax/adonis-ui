import React from "react";
import ADGrid, { ADGridCol } from "ADGrid";
import ADSlides from "ADSlides";
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
          <ADSlides
            data={[
              {
                link: "#",
                id: 1,
                title: "Product 1",
                src: "https://placehold.co/1200x700",
              },

              {
                link: "#",
                id: 2,
                title: "Product 2",
                src: "https://placehold.co/1200x700",
              },

              {
                link: "#",
                id: 3,
                title: "Product 3",
                src: "https://placehold.co/1200x700",
              },
            ]}
          />
        </ADGridCol>
      </ADGrid>
    </styles.Container>
  );
};
