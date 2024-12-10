import React, { useRef } from "react";
import { uniqueId } from "lodash";
import { useTheme } from "@emotion/react";
import ADText from "ADText";
import ADButton from "ADButton";
import ADLoaderButton from "ADLoaderButton";
import ADAdvice from "ADAdvice";
import ADGrid, { ADGridCol } from "ADGrid";
import ADFlex from "ADFlex";
import Price from "./components/Price";
import Sizes from "./components/Sizes";
import Categories from "./components/Categories";
import { X as CloseIcon } from "@styled-icons/feather/X";
import { Sliders } from "@styled-icons/feather/Sliders";
import * as styles from "./styles";

export const ADProductFilter = ({
  id = uniqueId("ad-product-filter"),
  onFilter,
  onClose,
}) => {
  const theme = useTheme();
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
        rows={"40px calc(100dvh - 150px) 50px"}
        alignItems="stretch"
        lg={{
          height: "100%",
        }}
      >
        <ADGridCol>
          <ADFlex
            sx={{
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <ADFlex gap={2} alignItems="center">
              <Sliders size={30}/>
              <ADText value="FILTROS" uppercase variant="title" />
            </ADFlex>
            <ADButton onClick={onClose} variant="text">
              <CloseIcon size={30} />
            </ADButton>
          </ADFlex>
        </ADGridCol>

        <ADGridCol>
          <styles.Content>
            <ADAdvice
              sx={{
                width: "calc(100% - 14px)",
                margin: `${theme.spacing.calc(1)}) auto`,
              }}
              variant="outlined"
              message="¿No encuentras el producto que buscas? Escríbenos por WhatsApp y te ayudamos al instante 👇"
              link="https://api.whatsapp.com/send?phone=573126093106&text=%C2%A1Hola!%20Estoy%20buscando%20un%20producto%20y%20me%20gustar%C3%ADa%20saber%20si%20pueden%20ayudarme.%20%F0%9F%98%8A"
            />
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
