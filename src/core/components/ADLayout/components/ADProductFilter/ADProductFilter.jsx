import React, { useRef } from "react";
import ADText from "ADText";
import ADFlex from "ADFlex";
import ADButton from "ADButton";
import ADLoaderButton from "ADLoaderButton";
import ADGrid, { ADGridCol } from "ADGrid";
import Price from "./components/Price";
import Sizes from "./components/Sizes";
import Categories from "./components/Categories";
import { X as CloseIcon } from "@styled-icons/feather/X";
import { uniqueId } from "lodash";
import * as styles from "./styles";

export const ADProductFilter = ({
  id = uniqueId("ad-product-filter"),
  onFilter,
  onClose,
}) => {
  const filtersRef = useRef({
    min: 0,
    max: 0,
    sizes: [],
    categories: [],
  });
  const handleSizeChange = (sizes) => {
    filtersRef.current.sizes = sizes
      .filter(({ selected }) => selected)
      .map(({ id }) => id);
  };
  const handleCategoryChange = ({ categories }) => {
    filtersRef.current.categories = categories;
  };

  const handlePriceChange = ({ min, max }) => {
    filtersRef.current.min = min;
    filtersRef.current.max = max;
  };

  return (
    <styles.Container className="ad-product-filter">
      <ADGrid
        fullWidth
        cols="1fr"
        rows={"40px calc(100dvh - 160px) 80px"}
        alignItems="stretch"
        lg={{
          gap: "4px",
          height: "100%",
        }}
      >
        <ADGridCol>
          <styles.Header>
            <ADButton onClick={onClose} variant="text">
              <CloseIcon size={30} />
            </ADButton>
          </styles.Header>
        </ADGridCol>

        <ADGridCol>
          <styles.Content>
            <Price onChange={handlePriceChange} />
            <Sizes onChange={handleSizeChange} />
            <Categories onChange={handleCategoryChange} />
          </styles.Content>
        </ADGridCol>

        <ADGridCol>
          <styles.Footer>
            <ADLoaderButton id={id}>
              <ADButton
                onClick={() => onFilter?.(filtersRef.current, id)}
                variant="sharp"
              >
                <ADText value="Filtrar" variant="subtitle" />
              </ADButton>
            </ADLoaderButton>
          </styles.Footer>
        </ADGridCol>
      </ADGrid>
    </styles.Container>
  );
};
