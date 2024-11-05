import React from "react";
import { Sliders } from "@styled-icons/feather/Sliders";
import ADGrid from "ADGrid";
import ADText from "ADText";
import ADLoaderButton from "ADLoaderButton";
import ADButton from "ADButton";
import { uniqueId } from "lodash";
import { ADProductCard } from "../ADProductCard/ADProductCard";
import * as styles from "./styles";

export const ADProductsGrid = ({
  data = [],
  id = uniqueId("ad-products-grid"),
  onLoadMore,
  onOpenFilter,
}) => {
  const handleLoaderMore = () => onLoadMore?.(id);

  return (
    <styles.Container id={`ad-products-grid-${id}`} className="ad-products-grid">
      <ADButton
        onClick={onOpenFilter}
        className="ad-products-grid__filter-button"
        variant="text"
      >
        <Sliders size={20} />
        <ADText value="Filtrar" variant="subtitle" />
      </ADButton>
      <ADGrid
        fullWidth
        cols={"repeat(auto-fit, minmax(300px, 1fr))"}
        lg={{
          gap: "20px",
        }}
        sm={{
          gap: "10px",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          columnGap: "15px",
        }}
      >
        {data.map(({ id = "", ...rest }) => (
          <ADProductCard key={id} {...rest} />
        ))}
      </ADGrid>
      <ADLoaderButton
        id={id}
        loaderProps={{
          text: <ADText value="Cargando..." variant="subtitle" />,
        }}
      >
        <ADButton
          onClick={handleLoaderMore}
          className="ad-products-grid__load-button"
        >
          <ADText value="Ver más" variant="subtitle" />
        </ADButton>
      </ADLoaderButton>
    </styles.Container>
  );
};
